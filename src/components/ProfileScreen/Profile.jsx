import React from 'react';
import Search from './Search';
import JobTable from '../JobsScreen/JobTable';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeNavbar from '../navigation/HomeNavbar';
export default function Profile() {
  return (
    <div>
      <HomeNavbar />
    </div>
  );
}
