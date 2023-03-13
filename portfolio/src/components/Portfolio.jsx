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
      <div className="portfolio-project section">
        <h3 className="portfolio-name">
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
        </h3>
        <p className="portfolio-desc">
          3D Glasses is a model e-commerce website built around the concept of
          providing people with 3-D-printed glasses, offering frames that are
          lightweight, custom, and affordable.
        </p>
        <div className="portfolio-content">
          <div className="portfolio-sect">
            <video src={td1} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              If a user does not already have an account, they will be directed
              to register. Registration requires a unique email address,
              followed by a username, and a password of at least 8 characters.
              Upon confirmation, the user will be registered and automatically
              signed in, and their username will show at the top right corner of
              the page, along with a sign-out button.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td2} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              On the Products page, a user can click "Add To Cart" on specific
              products to add them to their shopping cart, displayed in a side
              modal. Each cart item has a delete button to remove an item, and
              an edit quantity button where a user can insert a specific number,
              manually increment the quantity, or click the add to cart button
              on the product to increase the cart quantity as displayed here
              along with the updated total. The clear cart button allows users
              to effectively empty the entire cart.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td3} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              To checkout, users can Review Order at the bottom of the cart
              which navigates to a new page where they will be prompted to fill
              out a shipping address and payment details in each of the dropdown
              forms. You also have the opportunity to enter the billing address
              if it is different from the shipping address. Once all of the
              required fields are filled, the order can be placed.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td4} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              Once the order has been fulfilled, the user will see a thank you
              screen, as well as a list of the products they just purchased.
              Users can also navigate to their profile page where they can view
              the personal information associated with their account, as well as
              all orders they have placed.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={td5} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              Admins can create new products with the "Add Product" form at the
              top of the page, where they can input all the necessary data to
              display a new product for purchase. They can also “delete” a
              product so it is no longer available to purchase, with a handy
              confirmation message to ensure there are no accidents. Lastly,
              they have the power to edit the name, description, price, or photo
              of a product, in case we need to update certain product
              information.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="portfolio-project section">
        <h3 className="portfolio-name">
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
        </h3>
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
      <div className="portfolio-project section">
        <h3 className="portfolio-name">
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
        </h3>
        <p className="portfolio-desc">
          Stranger's Things is a React app featuring a consumer-to-consumer
          marketplace for goods and services. It enables users to create posts,
          message other users regarding their posts, and delete their own posts.
          Account authentication is required to create and manage posts, and
          users are able to easily navigate the app with a range of features and
          functions.
        </p>
        <div className="portfolio-content">
          <div className="portfolio-sect">
            <video src={st1} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              This clip demonstrates the process of registering for an account
              on Stranger's Things, beginning with navigating to the
              registration page and entering the required credentials. The clip
              highlights the user-friendly interface of the app, allowing users
              to quickly and easily sign up for an account.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={st2} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              Upon registration, users can navigate to the form to create a
              listing, where they can enter a title, description, location, and
              select the option of delivery. Once posted, the new listing will
              populate on the home page with the rest of the posts.
            </p>
          </div>
          <div className="portfolio-sect">
            <video src={st3} controls="controls" className="portfolio-pic" />
            <p className="portfolio-aside">
              Users can send messages to authors of posts by clicking a button
              rendered on every post but the user's. They will be brought to a
              new page where the message can be typed and sent. Once a user has
              received or sent a message, it will show up in the user's Messages
              tab.
            </p>
          </div>
          <div className="pb"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
