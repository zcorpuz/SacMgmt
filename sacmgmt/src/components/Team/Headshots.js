import React, { Component } from "react";
import Teammember from './Teammember';
import './App.css';

function Headshots () {

    return (

        <div className="theteam">
            <Teammember name="Laura Vaca Davila" Role="Community Manager, Principal" Message="Laura is the Principal and Chief Executive Officer of Sacramento Management Co., Inc. She began her career in Community Management in 2016 and earned her Certified Community Association Manager (CCAM) designation through the California Association of Community Managers (CACM) in April of 2017. Laura has a passion for helping others succeed and uses that same driving force to help her clients and communities thrive. On a typical Sunday, you can find Laura reading a book or binge-watching Netflix with her husband and two daughters." />
            <Teammember name="Kaitlin DuNann" Role="Community Manager, Partner" Message="Kaitlin joined the company in 2018  and has been an integral team member of Sacramento Management. She immediately adapted to the fast pace environment and became Certified Community Association Manager in less than six months through the California Association of Community Managers (CACM) . With her think-outside-the-box, approachable and positive attitude, she can quickly solve any conflicts. In 2019, she became a business partner of Sacramento Management.  During her free time, she enjoys spending time with her son, working out, cooking for her family and painting." />
            <Teammember name="Cesar Vaca" Role="CFO" Message="Cesar has a masters degree in business management and bachelors degree in business administration, marketing, and hospitality. His private and public sector experience helps this office overcome obstacles with new and updated business processes . Cesar oversees the behind the scenes day to day operations and his determined and devoted personality has helped Sacramento Management reach new goals. In his personal time, he enjoys gardening, swimming, and cooking with his wife and two daughters." />
            <Teammember name="Dee Ann Freeman" Role="Accountant" Message="Dee Ann has long standing career in accounting services for over 30 years. Her HOA accounting career started in 2006 and has been a dedicated professional to this industry ever since. She found her home in 2014 when she joined Sacramento Management. Dee Anns unwavering integrity, diligence and go getter attitude, makes her an irreplaceable asset to the company.  When  Dee Ann is not in the office, she loves going to church, spending time with her family and friends. Dee Ann continues to improve her personal and professional growth, striving to be the best version of herself." />
            <Teammember name="Jack Nielsen" Role="Director of Field Operations" Message="Jack has been a loyal employee for 15 years! He oversees all the HOAs and commercial properties maintenance needs. Jack is meticulous about his work and will never take short cuts. An Alumni from UC Davis, Jack has several well-known art sculptures throughout the Sacramento region. In his spare time, he loves to spend time with his animals, help his community and continues to use his artistic side to create beautiful pieces." />
        </div>
    );
}
export default Headshots;

