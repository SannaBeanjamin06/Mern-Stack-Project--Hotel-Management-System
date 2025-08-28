import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Cities</li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Countries</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Guest houses</li>
        </ul>

        <ul className="fList">
        <li className="fListItem">Help</li>
        <li className="fListItem">Free Taxi</li>
        <li className="fListItem">Inquiry</li>
        <li className="fListItem">Feedback</li>
        <li className="fListItem">Customer Service</li>
        <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright ©️ 2024 RoyalSuites.</div>
    </div>
  );
};

export default Footer;