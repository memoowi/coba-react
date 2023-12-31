import HyperLink from "../Components/HyperLink";

export default function Home() {
  const data = {
    name: "Misbach",
    from: "Surabaya",
  };
  const data2 = ['makan', 'hitam', 'kucing'];

  const data3 = [
    {
      name: "Misbach",
      from: "Surabaya",
    },
    {
      name: "Ahmad",
      from: "Yogya",
    },
    {
      name: "Putra",
      from: "Surabaya",
    },
  ];

  const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h1 className="text-3xl text-cyan-500">Home Page</h1>
      <HyperLink to="/about">
        <p>Go to About</p>
      </HyperLink>
      <div className="text-3xl">
        <h2>Nama Saya <span className="text-red-500">{data.name}</span></h2>
        <h2>Saya dari <span className="text-red-500">{data.from}</span></h2>
      </div>
      <div className="text-3xl">
        <p>Hobi : {data2[0]}</p>
        <p>Warna Kesukaan : {data2[1]}</p>
        <p>Hewan Peliharaan : {data2[2]}</p>
      </div>

      <div className="text-3xl bg-green-500">
        {data3.map((bio) => (
          <p key={bio.name}>{bio.name} dari {bio.from}</p>
        ))}
      </div>

      <div className="text-3xl bg-sky-500">
        {data3.filter((bio) => bio.from === "Surabaya").map((bio) => (
          <p key={bio.name}>{bio.name} dari {bio.from}</p>
        ))}
      </div>

      <div className="text-3xl bg-red-500">
        {angka.reduce((a, b) => a + b, 0)}
      </div>
      
    </div>
  );
}