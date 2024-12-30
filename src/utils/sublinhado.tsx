export default function Sublinhado({ color = 'bg-white' }) {
  return (
    <span className={`absolute bottom-0 left-1/2 w-0 h-[1px] rounded transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 ${color}`} />
  )
}