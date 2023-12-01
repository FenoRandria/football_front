import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useApi } from '../ApiContext';

// import './StatGenerale.css';
import './Style.css';

const StatGenerale: React.FC = () => {

    const [data, setData] = useState<any[]>([]);
    const apiUrl  = useApi();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${apiUrl}stat-generales`);
          setData(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      };
      fetchData();
    }, []);

  return (
    <section>
        <h1>Statistiques des Équipes</h1>
        <table  className="fixed_headers">
            <tr>
                <th>Équipe</th>
                <th>Compétition</th>
                <th>Buts</th>
                <th>Tirs pm</th>
                <th>Discipline</th>
                <th>Possession%</th>
                <th>PassesRéussies%</th>
                <th>AériensGagnés</th>
                <th>Note</th>
            </tr>

            {data.map((item) => (
                <tr key={item.id} >
                    <td>{item.equipe}</td>
                    <td>{item.competition}</td>
                    <td>{item.buts}</td>
                    <td>{item.tirs}</td>
                    <td>
                        <span className="yellow-card-box">{item.jaune}</span>
                        <span className="red-card-box">{item.rouge}</span>
                    </td>
                    <td>{item.possession}</td>
                    <td>{item.passesReussies}</td>
                    <td>{item.aeriensGagnes}</td>
                    <td>{item.note}</td>
                </tr>
                ))}
        </table>
    </section>
  );
};

export default StatGenerale;
