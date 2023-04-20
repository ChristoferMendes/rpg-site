import { useAuthStore } from "../../store/auth";

export default function SettingModal({ isOpen, onToggle }: { isOpen: boolean, onToggle: () => void }) {
  const { actions: { logout } } = useAuthStore()

  return (
    <>
      {isOpen &&
        (
          <div className="absolute top-0 bg-vulcal opacity-80 h-screen w-screen z-50">
            <div className="flex bg-red-900" onClick={logout}>
              <p>a</p>
            </div>
          </div>
        )
      }
    </>
  )
}
