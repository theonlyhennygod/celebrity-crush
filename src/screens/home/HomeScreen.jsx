import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Tabs from './components/Tabs'
import Footer from './components/Footer'
import CrushList from './components/CrushList'
import { db } from './../../../utils/index'
import { crushes } from '../../../utils/schema'
import { useLocation } from 'react-router-dom'
import { desc } from 'drizzle-orm'


function HomeScreen() {

  // Get the current URL params

  const params = useLocation();
  const [crushList, setCrushList] = useState([]);

  // Get all crushes on component mount

  useEffect(() => {
    getAllCrushes();
  }, [params])

  // Get all crushes

  const getAllCrushes = async () => {
    const result = await db.select().from(crushes)
      .orderBy(desc(params.hash == '#hot'
        || params.hash == '#top'
        ? crushes.vote : crushes.id)).limit(25);
    setCrushList(result);
  }

  return (
    <div>
      <Header />
      <Hero />
      <Tabs />
      <CrushList crushList={crushList} refreshData={getAllCrushes} />
      <Footer />
    </div>
  )
}

export default HomeScreen
