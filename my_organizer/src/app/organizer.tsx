'use client';

import { useEffect, useState } from 'react';

import Scheduler from '@/components/scheduler';

export default function Organizer() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // // Fetching data from an external API
        // fetch('https://api.example.com/data')
        //   .then((response) => response.json())
        //   .then((data) => setData(data));
      }, []);
    
      // return <div>Data: {data ? JSON.stringify(data) : 'Loading...'}</div>;
      return <div>
        <Scheduler />
      </div>;
}