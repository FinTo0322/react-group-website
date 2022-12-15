import { Wrapper, Status } from "@googlemaps/react-wrapper";


function Contact() {
  return (
    <div>
      <h1 className="text-center m-5 "><strong>Contact us</strong></h1>
          <div className="d-flex flex-row shadow-lg m-5">
            <div className="d-flex flex-column col-6 text-center pt-5">
        <h1 className=""><strong>Group 3</strong></h1>
        <h3 className="">Joelyn Ladores, Henri Edra</h3>
        <h3 className=""> Joshua Zafe, Fin Sienes</h3>
        <h3 className=" mb-5">Allen Claridad</h3>
        <p className="pt-2 text-muted">Ground Floor, Picture City Center, 88 Timog Ave, Quezon City, 1103 Metro Manila</p>
        <p className="text-muted">Group3@gmail.com</p>
        <p className="text-muted">+63 (03) 068 4170</p>
        </div>
        <div className="d-flex flex-row">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.387191222775!2d121.0338260887919!3d14.633949143099068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b733976b3fff%3A0xa748c197efb34291!2sPicture%20City%20(Timog%20Avenue)!5e0!3m2!1sen!2sph!4v1671125386911!5m2!1sen!2sph" 
        width="925" 
        height="600" 
        style={{border:0,}}>
        </iframe>

    </div>
    </div>
    </div>
  );
}

export default Contact;
