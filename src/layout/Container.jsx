export default function Container({ children }) {
  return(
    <div className="flex flex-col  items-center h-[calc(100vh-128px)]">
      { children }
    </div>
  )
}