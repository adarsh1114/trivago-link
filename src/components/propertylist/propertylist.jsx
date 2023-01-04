import "./propertylist.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels in <p className="para">Jaipur</p></h1>
          <h2>8,013 hotels</h2>
          <h2>Avg.₹3,232</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
        <h1>Hotels in <p className="para">Udaipur</p></h1>
          <h2>4,523 hotels</h2>
          <h2>Avg.₹4,196 </h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
        <h1>Hotels in <p className="para">Hyderbad</p></h1>
          <h2>6,871 hotels</h2>
          <h2>Avg.₹3,808 </h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
        <h1>Hotels in <p className="para">Delhi</p></h1>
          <h2>19100 hotels</h2>
          <h2>Avg.₹2,864 </h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
        <h1>Hotels in <p className="para">Manali</p></h1>
          <h2>7645 hotels</h2>
          <h2>Avg.₹3,109 </h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;