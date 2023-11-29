import React from 'react';

const Notizie = () => {
  const newsData = [
    {
      title: 'Annuncio di lavoro',
      description: 'La nostra comunità cerca urgentemente 2 infermieri professionali per implementare lo staff multidisciplinare. Invia la candidatura al nostro indirizzo email o telefona per ricevere informazioni dettagliate.',
    },
    {
      title: 'Tombolata solidale',
      description: 'Ogni venerdì del mese di dicembre, la nostra comunità organizza una tombolata solidale con i familiari dei nostri ospiti al fine di favorire le attività di socializzazione e far sentire ogni ospite il calore umano e familiare.',
    },
    {
      title: 'Accordo con la regione Lazio',
      description: 'Il 20 novembre scorso si è tenuta una riunione con il presidente della regione Lazio e con il sig..... in qualità di assessore al welfare per stipulare una dichiarazione controfirmata per usufruire delle convenzioni regionali e nazionali.',
    },
    {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus diam, consequat nec ullamcorper non, tristique venenatis ligula. Aliquam erat volutpat. Aliquam libero enim, faucibus eu vehicula ac, convallis nec purus. Ut non arcu tincidunt, mattis felis at, tincidunt diam. Sed sed ultrices turpis. Pellentesque porta sit amet lectus eget pellentesque. Proin lorem elit, porttitor vel auctor vel, molestie vitae purus. In quis mattis libero. Morbi ex turpis, venenatis vitae rhoncus sit amet, pellentesque vel ante. Ut pulvinar sollicitudin mauris vitae laoreet. Donec aliquam facilisis ipsum id lobortis. Aliquam erat volutpat. Nam imperdiet, orci sed dignissim aliquam, massa nunc rutrum ante, sed egestas ligula felis eget diam. Nam consequat ex sed urna tempus, sit amet congue erat pretium.',
      },
      {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus diam, consequat nec ullamcorper non, tristique venenatis ligula. Aliquam erat volutpat. Aliquam libero enim, faucibus eu vehicula ac, convallis nec purus. Ut non arcu tincidunt, mattis felis at, tincidunt diam. Sed sed ultrices turpis. Pellentesque porta sit amet lectus eget pellentesque. Proin lorem elit, porttitor vel auctor vel, molestie vitae purus. In quis mattis libero. Morbi ex turpis, venenatis vitae rhoncus sit amet, pellentesque vel ante. Ut pulvinar sollicitudin mauris vitae laoreet. Donec aliquam facilisis ipsum id lobortis. Aliquam erat volutpat. Nam imperdiet, orci sed dignissim aliquam, massa nunc rutrum ante, sed egestas ligula felis eget diam. Nam consequat ex sed urna tempus, sit amet congue erat pretium.',
      },
      {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus diam, consequat nec ullamcorper non, tristique venenatis ligula. Aliquam erat volutpat. Aliquam libero enim, faucibus eu vehicula ac, convallis nec purus. Ut non arcu tincidunt, mattis felis at, tincidunt diam. Sed sed ultrices turpis. Pellentesque porta sit amet lectus eget pellentesque. Proin lorem elit, porttitor vel auctor vel, molestie vitae purus. In quis mattis libero. Morbi ex turpis, venenatis vitae rhoncus sit amet, pellentesque vel ante. Ut pulvinar sollicitudin mauris vitae laoreet. Donec aliquam facilisis ipsum id lobortis. Aliquam erat volutpat. Nam imperdiet, orci sed dignissim aliquam, massa nunc rutrum ante, sed egestas ligula felis eget diam. Nam consequat ex sed urna tempus, sit amet congue erat pretium.',
      },
  ];

  return (
    <div className="containerequipe">
      <div className="notizie-container">
        <h2>Ultime news</h2>
        <div className="notizie-scrollable">
          {newsData.map((news, index) => (
            <div className="notizia-card" key={index}>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="team-section">
        <h2>La nostra equipe</h2>
        <p>L'equipe multidisciplinare della nostra comunità comprende diverse figure professionali al fine di favorire la piramide dei bisogni di ogni singolo ospite. L'equipe è composta da:</p>
       <li>Psicologi</li>
       <li>Assistenti sociali</li>
       <li>Medici</li>
       <li>Infermieri</li>
       <li>Operatori socio sanitari</li>
       <li>Ausiliari</li>
       <li>Animatori</li>
       <li>Educatori</li>
       <li>Cuochi e adetti alla sala mensa</li>
      </div>
    </div>
  );
};

export default Notizie;
