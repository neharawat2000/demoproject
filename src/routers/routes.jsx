// RoutesComponent.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from "../Pages/Dashboard/Dashboard";
import Applications from "../Pages/Applications/Applications";
import ISOs from "../Pages/ISOs/ISOs";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Syndicators from "../Pages/Syndicators/Syndicators";
import Overview from '../Component/NewApplication/Overview';
import DecisionLogic from '../Component/NewApplication/DecisionLogic';
import History from '../Component/NewApplication/History';
import ClientDetails from '../Component/NewApplication/ClientDetails';
import AddSyndicator from '../Pages/Syndicators/AddSyndicator';
import EditSyndicator from '../Pages/Syndicators/EditSyndicator';
import BillingSyndicator from '../Pages/Syndicators/BillingSyndicator';
import OfferSyndicator from '../Pages/Syndicators/OfferSyndicator';
import AddISO from '../Pages/ISOs/AddISO';
import ApplicationsAndFundings from '../Pages/ISOs/ApplicationsAndFundings';
import UsersISO from '../Pages/ISOs/UsersISO';
import BillingISO from '../Pages/ISOs/BillingISO';
import SettingISO from '../Pages/ISOs/SettingISO';
import Setting from '../Pages/Setting/Setting';
import SettingAdmin from '../Pages/SettingAdmin/SettingAdmin';
import { ProtectedRoutes } from '../service/ProtectedRoutes';
import AddUser from '../Pages/Setting/AddUser';
import ISODocument from '../Pages/ISOs/ISODocument';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';
import UnderWriterOverview from '../Pages/UnderWriter/UnderWriterOverview';
import UnderWriterClient from '../Pages/UnderWriter/UnderWriterClient';
import UnderWriterHistory from '../Pages/UnderWriter/UnderWriterHistory';
import UnderWriter from '../Pages/UnderWriter/UnderWriter';
import UnderWriterDocuments from '../Pages/UnderWriter/UnderWriterDocuments';
import Documents from '../Component/NewApplication/Documents';
import Notes from '../Component/NewApplication/Notes';
import UnderWriterNotes from '../Pages/UnderWriter/UnderWriterNotes';
import DocumentsISO from '../Pages/ISOs/DocumentsISO';
import UnderwriterApplication from '../Pages/UnderWriter/UnderwriterApplication';
import { setUser } from '../redux/action';

export default function RoutesComponent() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
      // Sync localStorage with Redux state
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
          dispatch(setUser(JSON.parse(savedUser)));
          console.log(user.role);
          
      }
  }, [dispatch]);

  return (
      <Router>
          <Routes>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/" element={<SignIn />} />
              
              <Route element={<ProtectedRoutes />}>
                  <Route path="/application" element={user.role === "admin" ? <UnderwriterApplication />:<Applications /> } />
              </Route>
              
              {/* <Route path="/application" element={<UnderwriterApplication />}/> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/application/overview" element={<Overview />} />
              <Route path="/application/decision-logic" element={<DecisionLogic />} />
              <Route path="/application/history" element={<History />} />
              <Route path="/application/documents" element={<Documents />} />
              <Route path="/application/client-details" element={<ClientDetails />} />
              <Route path="/application/notes" element={<Notes />} />
              <Route path="/application/under-writer" element={<UnderWriter />} />
              <Route path="/application/underwriter/overview" element={<UnderWriterOverview />} />
              <Route path="/application/underwriter/decision-logic" element={<DecisionLogic />} />
              <Route path="/application/underwriter/client-details" element={<UnderWriterClient />} />
              <Route path="/application/underwriter/history" element={<UnderWriterHistory />} />
              <Route path="/application/underwriter/documents" element={<UnderWriterDocuments />} />
              <Route path="/application/underwriter/notes" element={<UnderWriterNotes />} />
              <Route path="/isos" element={<ISOs />} />
              <Route path="/isos/add-iso/general-info" element={<AddISO />} />
              <Route path="/isos/add-iso/applications-&-fundings/all-application" element={<ApplicationsAndFundings />} />
              <Route path="/isos/add-iso/users" element={<UsersISO />} />
              <Route path="/isos/add-iso/billing" element={<BillingISO />} />
              <Route path="/isos/add-iso/documents" element={<DocumentsISO />} />
              <Route path="/isos/add-iso/settings" element={<SettingISO />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/syndicators/overview" element={<Syndicators />} />
              <Route path="/syndicators/offers" element={<OfferSyndicator />} />
              <Route path="/syndicators/billing" element={<BillingSyndicator />} />
              <Route path="/syndicators/add-syndicator" element={<AddSyndicator />} />
              <Route path="/syndicators/edit-syndicator" element={<EditSyndicator />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/setting/user" element={<AddUser />} />
              <Route path="/setting/admin" element={<SettingAdmin />} />
          </Routes>
      </Router>
  );
}
