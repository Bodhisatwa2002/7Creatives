import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              mauris lacus, vulputate eget lacinia quis, fringilla ultrices
              libero. Pellentesque consectetur mauris vel nulla consequat
              euismod. Donec vulputate magna luctus neque.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise
