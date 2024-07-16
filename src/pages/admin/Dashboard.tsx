import { HeadProvider, Link, Meta, Title } from "react-head";
import { NavBar } from "../../components/NavBar";
import styles from "../../styles/Dashboard.module.scss";
import DashboardSideMenu from "../../components/DashboardSideBar"
import {Tables} from "../../components/Tables"

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <DashboardSideMenu/>
      <main className={styles.main}>
        <Tables/>
      </main>
      
    </div>
  );
}
