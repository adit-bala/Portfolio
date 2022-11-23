import pfp from "../../public/Aditya-Balasubramanian.jpg";

export default function Index() {
  return (
    <>
      <nav className="">
        <div className="">
          <div class="">
            <ul>
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="/"> Blog </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-10 max-w-sm mx-auto items-center space-x-4 space-y-3 text-center">
        <div className="shrink-0 flex justify-center">
          <img src={pfp} className="md:h md:w rounded-full" alt="Adit"></img>
        </div>
        <div className="text-2xl font-semibold text-black">
          Aditya Balasubramanian
        </div>
        <p className="text-slate-5000">
          {" "}
          Greetings! I'm a student at UC Berkeley studying Computer Science.
          Welcome into my little corner of the internet where I house some of my
          musings!{" "}
        </p>
      </div>
    </>
  );
}
