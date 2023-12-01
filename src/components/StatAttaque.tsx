import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useApi } from '../ApiContext';
import './Style.css';

const StatAttaque: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const apiUrl  = useApi();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${apiUrl}statattaques`);
          console.table(response.data);
          setData(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      };
      fetchData();
    }, []);

  return (
    <section>
        <h1>Statistiques des Équipes <span style={{color:"red", fontWeight:"normal" }} >(attquants)</span></h1>
        <div className="table-container">
          <table className="fixed_headers">
            <tr>
                <th>Équipe</th>
                <th>Compétition</th>
                <th>Tirs pm</th>
                <th>Tirs CA pm</th>
                <th>Dribbles pm</th>
                <th>Fautes subies pm</th>
                <th>Note</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id} >
                    <td>{item.equipe}</td>
                    <td>{item.competition}</td>
                    <td>{item.tirs}</td>
                    <td>{item.tirsca}</td>
                    <td>{item.dribbles}</td>
                    <td>{item.fautes}</td>
                    <td>{item.note}</td>
                </tr>
                ))}
        </table>
      </div>
    </section>
  );
};

export default StatAttaque;
