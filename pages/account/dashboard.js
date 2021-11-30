import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "@/components/Layout";
import { useState, useEffect, useContext } from "react";
import { FaUser } from "react-icons/fa";
import Link from 'next/link'
import styles from '@/styles/AuthForm.module.css'
import AuthContext from '@/context/AuthContext'





export default function DashboardPage() {
 
    return (
        <Layout title="User Dashboard">
            <h4>Hello Dashboard</h4>
              
        </Layout>
    )
}
