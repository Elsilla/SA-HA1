import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials"

const Testimonials = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="google-font-title mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-[3rem]">
            Nuestros Clientes
          </h2>
          <p className="google-font-text mx-auto max-w-2xl text-muted-foreground">
            Miles de clientes satisfechos confían en nosotros para sus joyas
            especiales
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-none shadow-md transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      fill="#FE6B39"
                      color="#FE6B39"
                      className={"h-5 w-5 text-accent fill-accent"}
                    />
                  ))}
                </div>
                <p className="google-font-text mb-4 text-muted-foreground">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="google-font-text font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="google-font-text text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;