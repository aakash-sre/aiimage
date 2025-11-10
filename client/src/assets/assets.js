import logo from './logo.svg'
import generated_ai from  './generated_ai.png'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
// import profile_img_1 from './profile_img_1.png'
// import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import girl_icon from './girl_icon.jpg'
import jwala_icon from './jwala_icon.png'
import robotbird_icon from './robotbird_icon.png'
import boy_icon from './boy_icon.png'
import zebra_icon from './zebra_icon.png'
import aakash_icon from './aakash_icon.jpg'
import abhay1_img from  './abhay1_img.jpg'
import abhay2_img from './abhay2_img.jpg'

export const assets = {
    logo,
    generated_ai,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    girl_icon,
    robotbird_icon,
    jwala_icon,
    boy_icon,
    zebra_icon

}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:aakash_icon,
        name:'Aakash sre',
        role:'UI/UX Designer',
        stars:4,
        text:`I've been using AI for nearly two years, primarily for Project, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:abhay2_img,
        name:'Abhay yadav',
        role:' Creator',
        stars:5,
        text:`I'am work at AI tools  for nearly One years,  and it has been incredibly users, making my work much easier.`
    },
    {
        image:abhay1_img,
        name:'Abhay',
        role:'page Designer',
        stars:3,
        text:`I've been using bg.removal for nearly One years, and it has been incredibly user-friendly.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]