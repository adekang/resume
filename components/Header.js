export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">康毅龙</h1>
        <p className="text-gray-600">求职意向：前端开发（随时到岗）</p>
      </div>
      <img
        src="https://i.loli.net/2021/10/29/AEQDrgG7S4vhOtJ.jpg"
        alt="avatar"
        className="w-24 h-24 rounded-full object-cover"
      />
    </header>
  );
}
