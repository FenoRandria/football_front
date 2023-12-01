import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useApi } from '../ApiContext';
import './Style.css';

const StatDefense: React.FC = () => 
{
    const [data, setData] = useState<any[]>([]);
    const apiUrl  = useApi();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${apiUrl}stat-defenses`);
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
                <th>Tirs pm</th>
                <th>Tacles pm</th>
                <th>Interceptions pm%</th>
                <th>Fautes pm</th>
                <th>Hors-jeux pm</th>
                <th>Note</th>
            </tr>

            {data.map((item) => (
                <tr key={item.id} >
                    <td>{item.equipe}</td>
                    <td>{item.competition}</td>
                    <td>{item.tirs}</td>
                    <td>{item.tacles}</td>
                    <td>{item.interceptions}</td>
                    <td>{item.fautes}</td>
                    <td>{item.horsJeux}</td>
                    <td>{item.note}</td>
                </tr>
                ))}
        </table>
    </section>
  );
};

export default StatDefense;
