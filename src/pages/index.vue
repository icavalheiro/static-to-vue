<template>
  <div>
    <Navigation />

    <Header
      :title="header.title"
      :subTitle="header.subTitle"
      :btnText="header.btnText"
      :btnHref="header.btnHref"
      :bgImage="header.bgImage"
    />

    <About
      title="Stylish Portfolio is the perfect theme for your next project!"
      btnText="What We Offer"
      btnHref="#services"
    >
      This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
      <a href="https://unsplash.com/">Unsplash</a>!
    </About>

    <Services />

    <Callout
      btnText="Download Now!"
      btnHref="https://startbootstrap.com/template-overviews/stylish-portfolio/"
      bgImage="/bg-callout.jpg"
    >
      Welcome to
      <em>your</em> next website!
    </Callout>

    <Portfolio header="Recent Projects" :projects="projects" />

    <CallToAction
      title="The buttons below are impossible to resist..."
      link1Name="Click Me!"
      link1Href="#"
      link2Name="Look at Me!"
      link2Href="#"
    />

    <Map 
        mapParams="f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"/>

    <Footer :icons="footerIcons">
        Copyright &copy; Your Website 2019
    </Footer>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Callout from "../components/Callout";
import Portfolio from "../components/Portfolio";
import CallToAction from "../components/CallToAction";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default {
  components: {
    Navigation,
    Header,
    About,
    Services,
    Callout,
    Portfolio,
    CallToAction,
    Map,
    Footer
  },
  data() {
    return {
      header: {
        title: "Stylish Portfolio",
        subTitle: "A Free Bootstrap Theme by Start Bootstrap",
        btnText: "Find Out More",
        btnHref: "#about",
        bgImage: "/bg-masthead.jpg"
      },
      footerIcons: [
          {
              icon: 'icon-social-facebook',
              href: '#',
          },
          {
              icon: 'icon-social-twitter',
              href: '#',
          },
          {
              icon: 'icon-social-github',
              href: '#',
          },
      ],
      projects: [
        {
          title: "Stationary",
          about: "A yellow pencil with envelopes on a clean, blue backdrop!",
          img: "portfolio-1.jpg",
          href: "#"
        },
        {
          title: "Ice Cream",
          about:
            "A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!",
          img: "portfolio-2.jpg",
          href: "#"
        },
        {
          title: "Strawberries",
          about:
            "Strawberries are such a tasty snack, especially with a little sugar on top!",
          img: "portfolio-3.jpg",
          href: "#"
        },
        {
          title: "Workspace",
          about:
            "A yellow workspace with some scissors, pencils, and other objects.",
          img: "portfolio-4.jpg",
          href: "#"
        }
      ]
    };
  }
};
</script>


