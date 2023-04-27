export function StrokeTexts({ text, size = 'text-6xl' }: { text: string, size?: string }) {

  return (
    <>
      <p className={`absolute top-10 ${size} ml-3 z-10 tracking-widest text-stroke flex w-full justify-center`}>{text}</p>
      <p className={`absolute top-3 ${size} z-10 tracking-widest flex w-full justify-center`}>{text}</p>
    </>
  );
}
