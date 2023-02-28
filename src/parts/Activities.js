import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;

  return (
    <section className="container mx-auto sm:px-4">
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-item-${index2}`}
              >
                <Fade bottom delay={300 * index2}>
                  <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link block text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
