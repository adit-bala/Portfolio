import pfp from "../../public/Aditya-Balasubramanian.jpg";

export default function Index() {
  return (
  <div class="py-8 max-w-sm mx-auto rounded-xl items-center space-x-4">
    <div class="shrink-0">
      <img src={pfp} class="h-12 w-12" alt="Adit"></img>
    </div>
    <div class="text-xl font-medium text-black">Aditya Balasubramanian</div>
    <p class="text-slate-5000"> Greetings! I'm a student at UC Berkeley studying Computer Science. Welcome to my corner of the internet where I share some personal experiences and thoughts!</p>
  </div>
  );
}
