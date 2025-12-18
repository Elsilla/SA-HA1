import React from 'react'
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const ThematicCollection = ({collections}) => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="google-font-title mb-4 text-3xl !font-bold text-foreground md:text-4xl lg:text-[3rem]">
            Colecciones Temáticas
          </h2>
          <p className="google-font-text mx-auto max-w-2xl text-muted-foreground">
            Descubre nuestras exclusivas colecciones diseñadas con pasión para
            los verdaderos fans del anime y los videojuegos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <Card
              key={collection.id}
              className="group overflow-hidden border-none shadow-md "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />
              </div>
              <CardContent className="relative -mt-20 space-y-4 p-6">
                <div className="rounded-lg bg-card p-6 shadow-lg flex flex-col justify-between min-h-[13rem]">
                  <div>
                    <h3 className="google-font-text mb-2 text-2xl !font-semibold text-card-foreground">
                      {collection.title}
                    </h3>
                    <p className="google-font-text mb-4 text-sm text-muted-foreground">
                      {collection.description}
                    </p>
                  </div>
                  <Button
                    className="google-font-text btn-green-arcadia !font-medium w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 !p-0"
                  >
                    <a className="flex justify-center items-center text-center w-full h-full" href={collection.link}>
                      Ir a la Colección
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThematicCollection
