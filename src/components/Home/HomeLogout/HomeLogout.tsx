import { AiOutlineCheck, AiOutlineQuestion } from "react-icons/ai";
import { HStack } from "../../HStack";
import { CgLogOut } from "react-icons/cg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLogoutQuestionMarkStore } from "../../../store/logoutQuestionMark";
import { useAuthStore } from "../../../store/auth";


export function HomeLogout() {
  const {
    logoutQuestionMark,
    loggedOut,
    actions: { showLogoutSuccessful, hideLogoutQuestionMark, showLogoutQuestionMark }
  } = useLogoutQuestionMarkStore()
  const { actions: { logout } } = useAuthStore()

  const removeQuestionMark = () => {
    hideLogoutQuestionMark()
  }

  const handleLogout = () => {
    hideLogoutQuestionMark()
    showLogoutSuccessful()
  }

  useEffect(() => {
    if (!loggedOut) return;

    const timeout = setTimeout(() => {
      logout()
    }, 500)

    return () => clearTimeout(timeout)
  }, [loggedOut])


  return (
    <HStack className="mt-12 justify-center items-end">
      {!logoutQuestionMark && !loggedOut && <CgLogOut className="text-4xl text-white" onClick={showLogoutQuestionMark} />}
      {logoutQuestionMark && !loggedOut &&
        <motion.div
          key={String(logoutQuestionMark)}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.2 }}
        >
          <AiOutlineQuestion
            className="text-4xl text-white"
            onMouseLeave={removeQuestionMark}
            onClick={handleLogout}
          />
        </motion.div>
      }
      {loggedOut && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: .2 }}
        >
          <AiOutlineCheck className="text-4xl text-green-600" />
        </motion.div>
      )}
    </HStack>
  );
}
