import './ContactUs.css';
import contactus from '../../assets/Contact-us.jpg'
const ContactUs = () => {
  return (
    <div>
      <div className="heading text-center" style={{ marginTop: '2rem' }}>
        <h1 className="font-weight-bold text-dark">CONTACT US</h1>
      </div>
      <section className="discovery py-5">
        <div className="row align-items-center container mx-auto">
          <div className="img col-lg-6 col-md-6 col-12 w-50">
            <img src={contactus} alt="image" className="img-fluid" />
          </div>

          <div className="text col-lg-6 col-md-6 col-12 w-50">
            <div className="container mt-4" id="form-container">
              <h2 className="text-center">Feel free to contact us using this form <i className="far fa-smile-beam"></i></h2>
              <form action="/contactus" className="text-center" method="post">
                <div className="form-group">
                  <label htmlFor="name" className="text-primary">Name*</label>
                  <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="text-primary">Email*</label>
                  <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="text-primary">Subject*</label>
                  <div className="dropdown">
                    <select name="subject" id="subject" className="form-control" required>
                      <option value="" disabled selected>Select an option</option>
                      <option value="support">General Query</option>
                      <option value="general">Promotions</option>
                    </select>
                    <span className="dropdown-toggle"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="query" className="text-primary">Query*</label>
                  <textarea name="query" id="query" className="form-control" rows="5" placeholder="Enter your Query" required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Question 1: What is Good Universe?
                  </button>
                </h5>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="card-body">
                  We are a group of individuals who have gathered to address the fallouts of climate change, gender inequalities, and detrimental health practices that exist in our urban and rural communities, by engaging different social strata in a comprehensive manner.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Question 2: How does Good Universe operate?
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="card-body">
                  We take every individual act as a collaborative means to create a collective that stands together to eradicate social inequalities and existing detrimental practices that affect our climate, families/communities, and bodies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;