import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import ImageUpload from "../components/DriverDetails/ImageUpload";
import { data } from "autoprefixer";

const DriverDash = () => {
  const id = "JOEMAN9779";
  const [ imageUploadTog, setImageUploadTog ] = useState(false);
  const location = useLocation();
  const [ trips, seTrips ] = useState([]);
  const [ images, setImages ] = useState([]);
  const [tripStart, SetTripStart] = useState(true);
  const API_KEY = 'AIzaSyBmJEz1BAP_pTHB2_YXuayZ52fDgpBfGFk';
  const API_KEY2 = 'AIzaSyA2jhKSF0P2ineLAieWzef-4OZ0o9ucDRM';
  const [selectedValue, setSelectedValue] = useState('');

  const driver = [{ name: null, surname: null, id: null, image: null, driverCode: null, dateCreated: null}];
  //console.log(driver);
  let dateAdded = 0;
//   let dateAdded = driver.dateCreated.split("T");
//   dateAdded = dateAdded[0].split("-");
//   dateAdded = dateAdded[0];

const mapRef = useRef(null);



  useEffect(()=>{
    const fetchMeThis = async () => {
            let tu = await fetch('https://qualitydrive.org/api/Trip/GetTrips?id=JOEMAN9779') // Replace with your actual API endpoint
          .then(response => response.json())
          .then((data) => {
            console.log("Tripping", data);
            seTrips(data?data:null); convertThis(data[data.length - 1].breadCrumbs)
          })
          .catch((error) => console.error('Error fetching users:', error));

          return tu;
    }

   fetchMeThis();
   
  //  let tripTime = localStorage.getItem("tripTime");
  //  let hoursL = hoursLapsed(tripTime);
  //  let minutes = 60 * parseInt(hoursL);

  //   console.log("Hours Check...", minutes);

  },[]);

  const convertThis = async (t) => {
    const jsonString = t;
    let lat = "";
    let lng = "";
    let y = [];
  
   
    //const jsonString = `[${t.replace(/(\w+):\s*([\w]+)/g, '"$1": "$2"')}]`;
            const dataArray = jsonString.split(",");//.splice(0, 24);
           // console.log("Trippy : ", dataArray);
          
          let c = 0;
          let Dis = 0;
            //console.log("Trippy string", dataArray);
          try {

            let dataArr = dataArray.length / 6;
           
             //dataArray.map((trip, index) => {
              for(let h = 0 ; h < dataArray.length ; h++){
                let o = 0;
                  if((h % 6) == 0){
                    lat = dataArray[h].split(":")[1];
                  }
                  
                  if((h % 6 + 1) == 1){
                    lng = dataArray[h + 1].split(":")[1];
                  }
                 // c =+ dataArray[h + 5];
                 
                  if((h % 6 + 5) == 5){
                    Dis = distanceCheck(dataArray[h + 5].split(":")[1]);
                    c = c + parseFloat(Dis);
                    console.log("Amount Km/s >", c);//
                  }

                  if(lat !== "" && lng !== "" || lat !== undefined && lng !== undefined || c > 250){
                    let p = { location: { lat: Number(lat), lng: Number(lng) }};
                    y.push(p);
                    console.log("uniqueData pushingg", p);
                    c = 0;
                  }
                  
              } 
            //});
            const uniqueDataX = y.filter((item, index, array) => {
              if (index === 0) return true; // Always keep the first item
              return JSON.stringify(item) !== JSON.stringify(array[index - 1]);
          });

          const uniqueData = [...uniqueDataX].reverse();
          const existingScript = document.getElementById('googleMaps');
          console.log("uniqueData", y);
          if (!existingScript) {
              const script = document.createElement('script');
              script.src = `https://maps.googleapis.com/maps/api/js?key=`+API_KEY2+`&callback=initMap`;
              script.id = 'googleMaps';
              document.body.appendChild(script);
              script.onload = () => initializeMap(uniqueData[0], uniqueData[uniqueData.length - 1], uniqueData);
          } else {
              initializeMap(uniqueData[0], uniqueData[uniqueData.length - 1], uniqueData);
          }

          //initializeMap(uniqueData[0], uniqueData[uniqueData.length - 1], uniqueData);
           //console.log("Trippy >>", uniqueData[0], uniqueData[uniqueData.length - 1], uniqueData);
          }

          catch(E){
            console.log("Trippy Error: ", E);
          }
  //console.log("google shit!<>!", t);
}

const distanceCheck = (d) => {
    let y = d.slice(0, -1);
    return y;
}

  // Initialize the map and route
 const initializeMap = (s, e, w) => {
  const map = new google.maps.Map(mapRef.current, {
      zoom: 6,
      center: { lat: s.lat, lng: s.lng }, // Centered on New York City
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);


  

 


  //console.log("goolgle shit!!", trips.JSON.parse(breadCrumbs)[0]);

  const start = { lat: 40.712776, lng: -74.005974 }; // New York City
  const end = { lat: 34.052235, lng: -118.243683 }; // Los Angeles
  const waypoints = [
      { location: { lat: 41.878113, lng: -87.629799 }, stopover: true }, // Chicago
      { location: { lat: 39.739236, lng: -104.990251 }, stopover: true }, // Denver
  ];

  // Request directions
  directionsService.route(
      {
          origin: s,
          destination: e,
          waypoints: w,
          travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(response);
          } else {
              console.error('Directions request failed due to ' + status);
          }
      }
  );
};

  useEffect(() => {
    const start = { lat: 40.712776, lng: -74.005974 }; // New York City
    const end = { lat: 34.052235, lng: -118.243683 }; // Los Angeles
    const waypoints = [
        { location: { lat: 41.878113, lng: -87.629799 }, stopover: true }, // Chicago
        { location: { lat: 39.739236, lng: -104.990251 }, stopover: true }, // Denver
    ];
  
    // Load the Google Maps script
    const loadGoogleMapsScript = () => {
        const existingScript = document.getElementById('googleMaps');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=`+API_KEY2+`&callback=initMap`;
            script.id = 'googleMaps';
            document.body.appendChild(script);
            script.onload = () => initializeMap(start, end, waypoints);
        } else {
            initializeMap(start, end, waypoints);
        }
    };

    if(localStorage.getItem("trip") === "undefined" || localStorage.getItem("trip") === undefined || localStorage.getItem("trip") === null ||  localStorage.getItem("trip") === "null"){
        SetTripStart(false);
    }else{
        SetTripStart(true);
    }

    //loadGoogleMapsScript();
  }, [trips]);

  // if(trips.length > 0){

  //         convertThis(trips[10].breadCrumbs);
         
  //      }

  let previousPosition = null;
  let previousTimestamp = null;
  let previousBearing = null;
  let trip = [];

  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(calculateSpeed, handleError, {
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 27000
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }

  // Replace with your Google Maps API key
  
  // Function to get speed limits for a given set of GPS coordinates
  async function getSpeedLimits(coordinates) {
      try {
          // Format the coordinates into a path string for the API request
          const path = coordinates.map(coord => `${coord.lat},${coord.lng}`).join('|');
          const BASE64_SIGNATURE = "LmVXdgR1anieZg9P-R2NcAj118s=";

          // Construct the API request URL
          const url = `https://roads.googleapis.com/v1/speedLimits?path=${path}&key=${API_KEY}`;

          // Make the GET request to the Speed Limits API using axios
          const response = await axios.get(url);

          // Extract and return the speed limits data
          return response.data.speedLimits;
      } catch (error) {
          console.error('Error fetching speed limits:', error.response ? error.response.data : error.message);
          return [];
      }
  }


  function checkCrumbs(a, stuff, compare){
      let t = false;
      (a !== null)?a.split(",").map((value) => {
          //console.log("value", value, compare.latitude);
          if(value == compare.latitude){

              //console.log("compare.latitude", compare.latitude);
              t = true;
          }

      }): null
      return t
  }

  function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
//console.log(generateGUID());

  async function StopTrip(){
    let coords = {Id: id};
    const r = await fetch("c", {
      method: "POST",
      body: JSON.stringify(coords),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json()).then(response => response);
    return r
  }

  async function saveBreadCrumb(a,d,e,s,bearing,distance){
  
        //console.log("trip", d,e,s,bearing,distance);
   try {
   
    const r = await fetch("https://qualitydrive.org/api/Trip/New/", {
      method: "POST",
      body: JSON.stringify( {
        "trip": "", 
        "Current": { "Latitude": d.latitude.toString(), "Longitude": d.longitude.toString(), "Timestamp": d.timestamp.toString() }, 
        "Id": 0, 
        "Guid": e.toString(), 
        "Speed": s.toString(), 
        "Bearing": bearing.toString(), 
        "Distance": distance.toString(), 
        "Driver":"JOEMAN9779" }),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json()).then(response => console.log("New trip data", response)).catch((error) => { console.log("New trop error", error)});
    return r
   }

   catch(error){
    console.log("Error New", error);
    return
   }
   
  }

  function setOld(a, b, c, d){
      //console.log("Exists", c);
      if(!c){
          localStorage.setItem("crumbs", d + "," + b.latitude); // + ", " + b);
      }

      return
      //localStorage.setItem("crumbs", localStorage.getItem("crumbs") + ", " + b);
  }

  function hoursLapsed(timestampMilliseconds) {
    // Get the current timestamp in milliseconds
    const currentTimestamp = Date.now();

    // Calculate the difference in milliseconds
    const timeDifference = currentTimestamp - timestampMilliseconds;

    // Convert milliseconds to hours
    const hoursLapsed = timeDifference / (1000 * 60 * 60);

    return hoursLapsed;
}

  function setNew(a, b, s, bearing, distance){
    let guid = generateGUID();
    let tripTime = localStorage.getItem("tripTime");
    let hoursL = hoursLapsed(tripTime);

     //console.log("Hours Check...", hoursL);
      localStorage.setItem("crumbs hours", hoursL); // + ", " + b);
      if(localStorage.getItem("trip") === "undefined" || localStorage.getItem("trip") === undefined || localStorage.getItem("trip") === null ||  localStorage.getItem("trip") === "null" || hoursL > 30 ){
        
        localStorage.setItem("trip", guid );
        localStorage.setItem("tripTime", new Date().getTime() );
      }else{
        
        localStorage.setItem("tripTime", new Date().getTime() );
        guid = localStorage.getItem("trip");
      }
     
     if(a.latitude !== b.latitude && a.longitude !== b.longitude){
        //console.log("New Adding...", a, b);
        saveBreadCrumb(a,b,guid,s,bearing, distance);
     }
      
      return
  }

  function newTrip(){
    let guid = generateGUID();
    localStorage.setItem("trip", guid );
    localStorage.setItem("tripTime", new Date().getTime() );
    return
  }

  function endTrip(){
    localStorage.removeItem("trip");
    localStorage.removeItem("tripTime");
    return 
  }

  function calculateSpeed(position) {
      const currentPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp
      };

      if (previousPosition) {
          const currentBearing = calculateBearing(previousPosition, currentPosition);

          const distance = calculateDistance(
              previousPosition.latitude, previousPosition.longitude,
              currentPosition.latitude, currentPosition.longitude
          );
          const timeElapsed = (currentPosition.timestamp - previousTimestamp) / 1000; // Time in seconds
   
          const speedMps = distance / timeElapsed; // Speed in meters per second
          const speedKmh = speedMps * 3.6; // Convert to km/h]
                      let crumb = checkCrumbs(localStorage.getItem("crumbs"), previousPosition.latitude, currentPosition);


                  if (speedKmh !== null && speedKmh > 100 && speedKmh < 320) {
                      //alert("Bad turning speed");
                     // document.getElementById('warning').innerText = `Alert: Speed Limit exceeded`;
                  }else{
                      //  document.getElementById('warning').innerText = ``;
                  }

                  // add crumbs to list
                  let crumbs = localStorage.getItem("crumbs");
                 //  console.log("crmbs", crumbs);

                   const coordinates = { lat: currentPosition.latitude, lng: currentPosition.longitude };
                   let bearingChange = null;
                      // Call the function and display the result
                      //getSpeedLimits(coordinates).then(speedLimits => {
                      //    const outputDiv = document.getElementById('speedLimit');
                      //    outputDiv.innerHTML = '<h2>Speed Limits:</h2>' + JSON.stringify(speedLimits, null, 2);
                      //  });

                      if ( distance < 40 || crumb !== undefined || !crumb || previousBearing !== null || previousPosition.latitude !== currentPosition.latitude || previousPosition.longitude !== currentPosition.longitude || speedKmh < 320) {
                            bearingChange = Math.abs(currentBearing - previousBearing);
          
                        if (bearingChange > 80 && crumb === false) { // Turn threshold in degrees
                            //console.log('Turn detected!', crumb);
          
                           // document.getElementById('turn').innerText = "Turn detected!";
          
                            if (speedKmh !== null && speedKmh > 15) {
                               //document.getElementById('turn').innerText = "Bad turning speed";
                            }
          
          
                        } else {
                         //   document.getElementById('turn').innerText = "Loading...";
          
                        }
                    }
  //console.log("crmbs bool: distance {1} speed {2}", currentPosition, distance, speedKmh);

                      if(crumb || distance > 80){
                          //document.getElementById('warning').innerText = "Stationary - " + distance;
                          document.getElementById('speed').innerText = `${Math.round(0)} km/h`;
                        //   if(distance < 4 ){
                        //       document.getElementById('warning').innerText = "Walking - " + distance;
                        //   }else if(distance > 3 && 8 > distance){
                        //       document.getElementById('warning').innerText = "Running - " + distance;
                        //   }else if(distance > 14 && distance < 40 ){
                              //document.getElementById('warning').innerText = "Driving - " + distance;
                        //   }
                         document.getElementById('speed').innerText = `${Math.round(speedKmh)} km/h`;
                         setOld(previousPosition, currentPosition, crumb, crumbs, speedKmh, bearingChange, distance);
                         //let r = [{longitude: previousPosition.longitude, latitude: previousPosition.latitude, timestamp: previousPosition.timestamp}, {longitude: currentPosition.longitude, latitude: currentPosition.latitude, timestamp: currentPosition.timestamp}];
                         //localStorage.setItem("crumbs", r);
                      }else{
                           //document.getElementById('warning').innerText = "Crumb Added - " + distance;
                           document.getElementById('speed').innerText = `${Math.round(speedKmh)} km/h`;
                           setNew(previousPosition, currentPosition, speedKmh, bearingChange, distance);
                           //let r = [{longitude: previousPosition.longitude, latitude: previousPosition.latitude, timestamp: previousPosition.timestamp},  {longitude: currentPosition.longitude, latitude: currentPosition.latitude, timestamp: currentPosition.timestamp}];
                           //localStorage.setItem("crumbs", r);
                       }

          

          //if(speedKmh < 325){

          //}

          previousBearing = currentBearing;
      }

      previousPosition = currentPosition;
      previousTimestamp = currentPosition.timestamp;
  }

  function calculateBearing(start, end) {
      const startLat = start.latitude * Math.PI / 180;
      const startLon = start.longitude * Math.PI / 180;
      const endLat = end.latitude * Math.PI / 180;
      const endLon = end.longitude * Math.PI / 180;

      const y = Math.sin(endLon - startLon) * Math.cos(endLat);
      const x = Math.cos(startLat) * Math.sin(endLat) -
          Math.sin(startLat) * Math.cos(endLat) * Math.cos(endLon - startLon);

      const bearing = Math.atan2(y, x) * 180 / Math.PI;
      return (bearing + 360) % 360; // Bearing in degrees
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371e3; // Radius of the Earth in meters
      const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
      const φ2 = lat2 * Math.PI / 180;
      const Δφ = (lat2 - lat1) * Math.PI / 180;
      const Δλ = (lon2 - lon1) * Math.PI / 180;

      const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = R * c; // In meters
      return distance;
  }

  function handleError(error) {
      console.error('Error occurred in retrieving location:', error);
      switch (error.code) {
          case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
          case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
          case error.TIMEOUT:
              //alert("The request to get user location timed out.");
              break;
          case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
      }
  }

  function findTripById(id) {
    
    const tripFound = trips.find(trip => String(trip.id) === String(id));
    console.log(`finding: `, tripFound);
    return tripFound;
  }

  const triggerFunction = (value) => {
    //alert(`You selected: ${value}`);
   // console.log("triggger", value);
    convertThis(value.breadCrumbs);
    // Add your custom logic here
  };

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    let y = findTripById(value);
   // 
    triggerFunction(y); // Call a function when an option is selected
  };

  //console.log("driver dash");

  const TripStarter = (props) => {
      //console.log("Trip start", props.tripStart);

      return (props.tripStart)?
      <span>
                <button onClick={newTrip} className="bg-green-600 text-white px-4 py-2 rounded-md">
                    Start Trip
                  </button>
                  <button className="bg-red-200 text-white px-4 py-2 rounded-md">
                    Stop Trip
                  </button>
              </span>:<span>
      <button className="bg-green-200 text-white px-4 py-2 rounded-md">
            Start Trip
          </button>
          <button onClick={endTrip} className="bg-red-600 text-white px-4 py-2 rounded-md">
            Stop Trip
          </button></span>;
          
  }
  
  // Dummy data for demonstration. Replace this with actual data fetching.
  // const driver = {
  //   id: "ABC123",
  //   name: "Sipho Khuzwayo",
  //   image: "/assets/sipho.jpeg",
  //   registrationYear: "2023",
  //   assignedVehicle: "Toyota Minibus",
  //   trips: "7,000 trips",
  //   distanceTravelled: "75,000 km",
  //   hoursDriven: "100 hours",
  // };

  return (
    <div className="py-10 px-36">
      {" "}
      <div className="p-8 bg-white rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            {(images.length > 0)?<img
              src={(images.length > 0)?images[0].image:null}
              alt={driver.name}
              className="h-24 w-24 rounded-full object-cover mr-4"
            />:<div className="h-24 w-24 rounded-full object-cover mr-4" ><i className="glyphicon glyphicon-user" style={{fontSize: "55px", color: "grey"}}></i></div>}
            {(imageUploadTog)?<a onClick={() => setImageUploadTog(!imageUploadTog)} title="Upload Profile Image" href="javascript:void(0)" style={{textDecoration: "none", color: "#112445"}}><span className="glyphicon glyphicon-camera" style={{position: "absolute", left: "28%", top: "175px"}}></span></a>:<a onClick={() => setImageUploadTog(!imageUploadTog)} title="Upload Profile Image" href="javascript:void(0)" style={{textDecoration: "none", color: "#ea580c"}}><span className="glyphicon glyphicon-camera" style={{position: "absolute", left: "28%", top: "175px"}}></span></a>}
            {(imageUploadTog)?<ImageUpload UserId={driver.id} updateVisibility={() => setImageUploadTog(false)} />:null}
            <div>
              <h1 className="text-2xl text-black font-bold">{driver.name} {driver.surname}</h1>
              <span className="text-sm text-gray-500 font-bold">Driver</span>
              <p className="text-sm text-gray-500 font-bold">{driver.driverCode}</p>
            </div>
          </div>
        
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>
            <div>
              
              <p className="text-black" id="speed"></p>
              <h2 className="text-lg text-black font-bold">Speed (km/h)</h2>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>
            <div>
              <h2 className="text-lg text-black font-bold">Trips</h2>
              <p className="text-black">{trips.length}</p>
              <br/>
            
                <select id="dropdown" className="text-white" value={selectedValue} onChange={(e) => handleSelect(e)}>
                <option value="" disabled>
                    Select trip
                  </option>

                  { trips.map((trip, index) => {
                    console.log("lookky", trip);
                      return <option key={trip.id || index} id={index} value={trip.id} >Trip {index + 1}</option>
                  })}
                </select>
        
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>
            <div>
              <h2 className="text-lg text-black font-bold">Distance Travelled</h2>
              <p className="text-black">{driver.distanceTravelled}</p>
            </div>
          </div>

     <br/>
     <br/>

     
          
        </div>
        <div className="py-12 text-center">
              <TripStarter tripStart={tripStart} />
            
          </div>
      </div>
      <div ref={mapRef} style={{ height: '100vh', width: '100%' }} />
    </div>
  );
};

export default DriverDash;
