import React from 'react';
import SingleBlog from './SingleBlog';

export default function BlogSection() {
  return (
    <div>
      <section className="text-gray-600 bg-gray-100 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <SingleBlog
              categoryName={'HIRING'}
              date={'12 JUN 2022'}
              blogTitle={'BEST WAY TO HIRE IT TALENT'}
              blogDescription={
                'Attracting passive candidates, those who are not actively looking for a new role, is a winning move when hiring IT talent. If they’re not looking, how are you supposed to get their attention? Here’s what you need to do to…'
              }
            />
            <SingleBlog
              categoryName={'CAREERS'}
              date={'12 MAY 2022'}
              blogTitle={'A KICKSTART IN THE TECH INDUSTRY'}
              blogDescription={
                "In today's fast-paced digital age, there are endless opportunities in the tech industry. From software development to cybersecurity and beyond, there is a role for everyone. But with so many options available, it can be overwhelming to know where to start. "
              }
            />
            <SingleBlog
              categoryName={'HIRING'}
              date={'12 MAY 2022'}
              blogTitle={'HOW TO CREATE A GENDER INCLUSIVE WORKPLACE'}
              blogDescription={
                'How to build a workplace where everyone feels safe and inspired whatever their gender, from hiring, benefits and promotion through to inclusive pronouns and allyship. '
              }
            />
            <SingleBlog
              categoryName={'CAREERS'}
              date={'12 MAY 2022'}
              blogTitle={
                'WHY EMBRACING DIFFERENT OPINIONS IN YOUR TEAM IS IMPORTANT'
              }
              blogDescription={
                'Learn more about why different opinions are important and how embracing diverse team opinions can be beneficial. '
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
