import { Button, Link } from "@nextui-org/react";
import Navigation from "./components/Navigation";

function App() {
  const team = [
    {
      name: "Tahmid Islam",
      facebook: "https://www.facebook.com/tahmid.islam.1000469",
    },
    {
      name: "Ahetasham Shifat",
      facebook: "https://www.facebook.com/shifatasr15.os",
    },
    {
      name: "Fahmida Afrin Priya",
      facebook: "https://www.facebook.com/fahmida.priya.104-",
    },
    {
      name: "Imtiaz Al Shariar",
      facebook: "https://www.facebook.com/shariarsenseii",
    },
    {
      name: "Eusha Nabila",
      facebook: "https://www.facebook.com/eusha.nabila.28",
    },
    {
      name: "Jarif Ihtisham",
      facebook: "https://www.facebook.com/profile.php?id=100027407190158",
    },
    {
      name: "Abdullah Ar Rafi",
      facebook: "https://www.facebook.com/abdullah.arrafi.777",
    },
  ];

  return (
    <div className="container mx-auto px-5 lg:px-20">
      <Navigation />
      <header
        id="home"
        className="py-20 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl xl:text-7xl 2xl:text-9xl font-bold">
            Spread the joy of Ramadan with everyone
          </h1>
          <p className="text-xl xl:text-3xl 2xl:text-5xl mt-5">
            We are raising fund to make sure underpriviledged people have a great Ramadan through providing iftar to orphanages and underpriviledged people near BRACU campus.
          </p>
        </div>

        <div className="text-center lg:text-right lg:w-1/3">
          <p className="text-2xl lg:text-3xl">Raised till yesterday</p>
          <p className="text-4xl lg:text-5xl">14,791.85</p>
          <p className="text-2xl lg:text-3xl">Updated daily at 11:59PM</p>
          <Link
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1YkgRfimZa4gmyFTBneCr_AAE7_l-QH3ZzdOkYI18SLM/edit?usp=sharing"
          >
            <Button color="success" className="mt-2 px-8" variant="shadow">
              Check transaction details
            </Button>
          </Link>
        </div>
      </header>

      <div id="donate" className="bg-green-500 p-10 rounded-lg my-5">
        <h2 className="text-xl xl:text-3xl 2xl:text-5xl font-bold text-white">
          We are accepting donations through bKash, Rocket, Nagad and also cash
          through our volunteers.
        </h2>
        <p className="text-white mt-5 text-2xl">
          Please donate to the following number. You'll find your transaction id
          in the public spreadsheet within 24 hours.
        </p>
        <p className="text-6xl font-bold text-green-950 mt-5">
          <span className="px-4 bg-[#00000027] rounded-md">01533-820600</span>
        </p>
      </div>

      <div id="agenda" className="my-20">
        <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold">
          Who are we working for?
        </h2>
        <p className="text-lg xl:text-xl 2xl:text-2xl">
          We are working to provide a nice iftar for underpriviledged people in
          our local community &amp; near BRACU campus and orphanages.
        </p>
      </div>

      <div id="team" className="my-20">
        <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold">
          Volunteers
        </h2>
        <ul className="text-lg xl:text-xl 2xl:text-2xl">
          {team.map((member, index) => (
            <li key={index}>
              <a
                href={member.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                {member.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div id="contact" className=" bg-gray-800 py-10">
        <p className="text-center text-white">
          For any queries, please contact us at{" "}
          <a
            className="text-blue-400"
            href="mailto:tahmidul.islam1@g.bracu.ac.bd"
          >
            tahmidul.islam1@g.bracu.ac.bd
          </a>{" "}
          or call at{" "}
          <a className="text-blue-400" href="tel:+8801533-820600">
            01533-820600
          </a>
        </p>
      </div>
      <div className=" bg-gray-900 py-10">
        <p className="text-center flex text-white items-center justify-center">
          <span>Made with</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart-handshake"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fd0061"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
            <path d="M12.5 15.5l2 2" />
            <path d="M15 13l2 2" />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default App;
