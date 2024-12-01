import TaskListCounts from "./TaskListCounts"

const Header = () => {
  return (
    <div>
        <div className="flex justify-between">
        <h1 className="text-white font-semibold text-xl">Hello <br/> <span className="text-3xl font-bold">Prince</span> </h1>
        <button className="bg-blue-500 font-semibold text-white w-auto px-4 h-10 rounded-md">Logout</button>
        </div>
        <TaskListCounts />
    </div>
  )
}

export default Header