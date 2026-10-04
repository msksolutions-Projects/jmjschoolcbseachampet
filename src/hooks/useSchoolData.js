import { useEffect, useState } from "react";

export default function useSchoolData() {
  const [news, setNews] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [completed, setCompleted] = useState([]);


  const SHEET_ID = "1AFZxaJnhbfB1FE0ysTVtibXJLIzEPeVj343F5rB_a_A";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsRes, upcomingRes, completedRes] = await Promise.all([
          fetch(`https://opensheet.elk.sh/${SHEET_ID}/news`).then((r) => r.json()),
          fetch(`https://opensheet.elk.sh/${SHEET_ID}/upcoming`).then((r) => r.json()),
          fetch(`https://opensheet.elk.sh/${SHEET_ID}/completed`).then((r) => r.json()),
        ]);

        setNews(newsRes || []);
        setUpcoming(upcomingRes || []);
        setCompleted(completedRes || []);
      } catch (error) {
        console.error(" Google Sheet API Error:", error);
      }
    };

    fetchData();
  }, []);

  return { news, upcoming, completed };
}
