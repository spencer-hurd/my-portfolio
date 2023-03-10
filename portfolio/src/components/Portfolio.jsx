import "./Styles/Portfolio.css";
import td1 from "../assets/project-vids/3d1.mp4";
import td2 from "../assets/project-vids/3d2.mp4";
import td3 from "../assets/project-vids/3d3.mp4";
import td4 from "../assets/project-vids/3d4.mp4";
import td5 from "../assets/project-vids/3d5.mp4";
import ft1 from "../assets/project-vids/ft1.mp4";
import ft2 from "../assets/project-vids/ft2.mp4";
import ft3 from "../assets/project-vids/ft3.mp4";
import ft4 from "../assets/project-vids/ft4.mp4";
import st1 from "../assets/project-vids/st1.mp4";
import st2 from "../assets/project-vids/st2.mp4";
import st3 from "../assets/project-vids/st3.mp4";
import { AiOutlineGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h3 className="page-name">Portfolio</h3>
      <p className="page-desc">
        Here are some demos of a few of my favorite applications I've had a role
        in developing:
      </p>
      <hr />
      <div className="portfolio-project">
        <b className="portfolio-name">
          3D-Glasses
          <a
            href="https://github.com/grace-shopper-7/3d-glasses"
            target={"_blank"}
            className="git-link"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://github.com/spencer-hurd/UNIV_FitnessTrackr_Starter"
            target={"_blank"}
            className="git-link"
          >
            <SiNetlify />
          </a>
        </b>
        <p className="portfolio-desc">
          3D Glasses is a model e-commerce website built around the concept of
          providing people with 3-D-printed glasses, offering frames that are
          lightweight, custom, and affordable.
        </p>
        <div className="portfolio-content">
          <div className="portfolio-sect">
            <video src={td1} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              If you do not already have an account, you will be directed to
              register. To start registration, add in your unique email address,
              followed by a username, and make sure you use a password of at
              least 8 characters. Upon confirmation, you will be registered and
              automatically signed in, and your username will show at the top
              right corner of the page along with a signout button.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td2} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              On the Products page, a user can click "Add To Cart" to populate
              specific products into their cart, and they will now display
              inside the shopping cart modal. Each cart item has a delete button
              to remove an item, and an edit quantity button where you can
              insert a specific number, manually increment the quantity, or
              click the add to cart button on the product to increase the cart
              quantity as displayed here along with the updated total. The clear
              cart button allows you to effectively empty the entire cart.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td3} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              If you scroll down you can click review order at the bottom of the
              cart which takes you to a new page where you’re prompted to fill
              out your shipping address and payment details in each of the
              dropdown forms. The dropdown for the shipping address has the
              standard input fields for your first name, last name, and address,
              while the payment details require credit card information. You
              also have the opportunity to enter the billing address if it is
              different from the shipping address. Once all of the required
              fields are filled, we can finally place the order!
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td4} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              Once your order has been fulfilled, you will see a thank you
              screen, as well as a list of the products you just purchased. Once
              you’ve placed an order, you can go to your profile page to see all
              of your personal information, as well as your order history.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td5} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              As an admin, we can create new products with the add product form
              at the top of the page, where we can input all the necessary data
              to display a new product for purchase. We can also “delete” a
              product so it is no longer available to purchase, with a handy
              confirmation message to ensure there are no accidents. Lastly, we
              have the power to edit the name, description, price, or photo of a
              product, in case we need to update certain product information.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="portfolio-project">
        <b className="portfolio-name">
          Fitness Trac.kr
          <a
            href="https://github.com/spencer-hurd/UNIV_FitnessTrackr_Starter"
            target={"_blank"}
            className="git-link"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://github.com/spencer-hurd/UNIV_FitnessTrackr_Starter"
            target={"_blank"}
            className="git-link"
          >
            <SiNetlify />
          </a>
        </b>
        <p className="portfolio-desc">
          Fitness Trac.kr is an application designed for users to track their
          workout routines. This full stack web application developed by myself
          and a peer. We worked together to build a secure API and set up our
          server, and found efficient ways to collaborate when fleshing out the
          front end components.
        </p>
        <div className="portfolio-content">
          <div className="portfolio-sect">
            <video src={ft1} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              Upon entering the site, you will be welcomed and prompted to sign
              up or sign in. For the authorization form, we implemented a side
              modal, styling the transition upon open and close for a
              streamlined, dynamic user experience.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={ft2} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              After registering or logging in, the user will obtain access to
              their personal routines and activities pages, where they can
              create custom routines and activities as well as edit or delete
              any they have authored. When adding activities to a routine, the
              user is presented with all activities to choose from, and can
              adjust the reps and set to fit their exercise needs.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={ft3} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              When a user creates a routine, they have the option of making it
              public, or private. Public routines are viewable by any user
              site-wide, but private routines are only viewable to the author.
              The privacy status can be changed by the author at any time.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={ft4} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              Users without accounts can still access all public routines and
              activities, but can not create or interact with them unless they
              are registered. We utilized local storage as well as implementing
              state to access information pertaining to the current user and
              their authorization token. This information is also posted to the
              database upon registration, alongside the tables for routines,
              activities, and routine activities.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="portfolio-project">
        <b className="portfolio-name">
          Stranger's Things
          <a
            href="https://github.com/spencer-hurd/StrangerThings"
            target={"_blank"}
            className="git-link"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="https://strangers-things-website.netlify.app"
            target={"_blank"}
            className="git-link"
          >
            <SiNetlify />
          </a>
        </b>
        <p className="portfolio-desc">
          Stranger's Things is a consumer-to-consumer based e-commerce site that
          allows users to create detailed listings to sell or trade items, as
          well as the ability to message any sellers.
        </p>
        <div className="portfolio-content">
          <div className="portfolio-sect">
            <video src={st1} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              After you open the website you can log in blah bleh blahbb
              uwhawruahua ashfuishdf sdfhisfhsuid dfhisdfhs sdhifhsifn
              sifsufisdf sdfhisdhjfisdhf sdifhsdifh dsidhfishfishfishsd
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={st2} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              After you open the website you can log in blah bleh blahbb
              uwhawruahua ashfuishdf sdfhisfhsuid dfhisdfhs sdhifhsifn
              sifsufisdf sdfhisdhjfisdhf sdifhsdifh dsidhfishfishfishsd
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={st3} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              After you open the website you can log in blah bleh blahbb
              uwhawruahua ashfuishdf sdfhisfhsuid dfhisdfhs sdhifhsifn
              sifsufisdf sdfhisdhjfisdhf sdifhsdifh dsidhfishfishfishsd
            </p>
          </div>
          <div className="pb"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
