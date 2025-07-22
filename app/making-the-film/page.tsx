import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Film, Award, Camera, Users, Heart } from "lucide-react";
import { promises as fs } from "fs";
import path from "path";

export default async function MakingTheFilm() {
  // Read JSON file instead of using Tina
  const filePath = path.join(process.cwd(), "content/pages/making-the-film.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const content = JSON.parse(fileContents);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <Film className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-display font-bold mb-6">{content.hero?.title || content.title || "Making the Film"}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {content.hero?.description || "The story behind \"24 Days Without You\" - from conception to screen, meet the passionate team who brought this vital maternal health story to life."}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <>
          {/* Our Producers Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold mb-6">Our Producers</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet the dedicated filmmakers who transformed Annie's story into an award-winning documentary
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Rebecca Rizzio */}
                <Card className="text-center">
                  <CardContent className="pt-8">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                      <img 
                        src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/d6b9cf96-890b-4c96-9144-24f697991f4e/thumbnail_3423084F-B3EF-42F2-9E9F-D596FE5DF8C3.jpg"
                        alt="Rebecca Rizzio, Director/Executive Producer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Rebecca Rizzio</h3>
                    <Badge variant="secondary" className="mb-4">Director/Executive Producer</Badge>
                    <p className="text-gray-600 leading-relaxed">
                      Rebecca is the director and executive producer of <em>24 Days Without You.</em> The film premiered at the Twin Cities Film Fest in 2024 and subsequently won the Audience Award in the documentary category. It was also a selected nominee of the San Diego Independent Cinema Awards and to be a part of the Women's International Film Festival in Newark, NJ.
                    </p>
                    <Separator className="my-4" />
                    <p className="text-gray-600 text-sm">
                      She is also the original director and developmental producer on the musical <em>Philly and the Dreamer</em>, winner of Broadway World's Best Original/New Work in Minneapolis and has directed several plays and musicals across the Twin Cities metro.
                    </p>
                  </CardContent>
                </Card>

                {/* Annie Sterle */}
                <Card className="text-center">
                  <CardContent className="pt-8">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                      <img 
                        src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/e1e03c45-e481-41ac-9190-a9ecb90fe8b9/thumbnail_F50F9BAC-4537-4577-B554-65419D01B35E_1_201_a.jpg"
                        alt="Annie Sterle, Executive Producer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Annie Sterle</h3>
                    <Badge variant="secondary" className="mb-4">Executive Producer</Badge>
                    <p className="text-gray-600 leading-relaxed">
                      Annie Sterle is a maternal health advocate, speaker, and filmmaker dedicated to improving outcomes and experiences for mothers and their care teams. After surviving AFE, a rare and life-threatening childbirth emergency, she left her corporate career to focus on advocacy, storytelling, and systems-level change. She currently lives in Minneapolis with her family.
                    </p>
                  </CardContent>
                </Card>

                {/* Carly Lassegard */}
                <Card className="text-center">
                  <CardContent className="pt-8">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                      <img 
                        src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/45e9116b-b044-4150-b983-426bf8ab1f0c/thumbnail_Cover+for+Somehow+I+Manage+%281%29.jpg"
                        alt="Carly Lassegard, Creative Executive Producer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Carly Lassegard</h3>
                    <Badge variant="secondary" className="mb-4">Creative Executive Producer</Badge>
                    <p className="text-gray-600 leading-relaxed">
                      Carly Lassegard is a non-fiction storytelling expert with over 12 years of experience in the media industry. She was one of the founding members of the Original Documentaries team at Netflix. As a senior-level executive, she worked on everything from audience favorites, breaking news, and award-winning documentary features, series, and shorts including Oscar-winning films such as <em>My Octopus Teacher, Icarus, American Factory, The White Helmets, Period. End of Sentence</em> and more.
                    </p>
                    <Separator className="my-4" />
                    <p className="text-gray-600 text-sm">
                      Carly is known as a strategic business thinker, a leader, and a collaborative creative partner with excellent programming and content development instincts. She grew up in the Minneapolis / St. Paul area and relocated here permanently in 2020.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Behind the Scenes Quote */}
          <section className="py-12 bg-teal-50">
            <div className="container mx-auto px-6 text-center">
              <blockquote className="text-2xl font-serif italic text-gray-700 max-w-4xl mx-auto">
                "We had the blood products. We had fifty people in the room. Everyone with one goal….we gotta save this woman."
              </blockquote>
              <cite className="text-lg text-teal-600 font-semibold mt-4 block">— Elizabeth Elfstrand, MD</cite>
            </div>
          </section>

          {/* Behind the Scenes Gallery */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold mb-6">Behind the Scenes</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A glimpse into the making of "24 Days Without You" - from intimate interviews to red carpet moments
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Filming Scenes */}
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/18c8f548-fda8-4b85-9e30-fdde4dee7575/IMG_7318.JPG"
                      alt="Annie and Henry playing in the grass while being filmed"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/564247fc-7f51-4152-8b6f-f920249f6886/thumbnail_IMG_2216.jpg"
                      alt="Behind the scenes filming with Tony"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Medical Team & Interviews */}
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/cc80d098-1d97-4de1-86f0-b37e0d1807ef/IMG_4551.JPG"
                      alt="Annie with her medical staff"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/81defdd7-ea85-4393-8a0b-409eada5a005/thumbnail_IMG_4563.jpg"
                      alt="Annie and a nurse during filming"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Film Festival & Premiere */}
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/1736950103749-00QBF1CM61R0AI4J9YFP/thumbnail_IMG_7257.jpg"
                      alt="The premiere of 24 Days Without You at the Twin Cities Film Fest"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/6774528ee065041c473320aa/9828c4fd-6fe9-4b51-bcde-da06b1ce45c6/thumbnail_IMG_4262.jpg"
                      alt="24 Days Without You crew at the Twin Cities Film Fest"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Film Journey Timeline */}
          <section className="py-16 bg-cream-100">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold mb-6">The Film's Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From conception to acclaim - the milestones that brought this story to audiences worldwide
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {/* Conception */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">The Story Begins</h3>
                          <p className="text-gray-700">
                            After surviving AFE (Amniotic Fluid Embolism), Annie Sterle knew her story needed to be told. 
                            She partnered with filmmaker Rebecca Rizzio to transform her experience into a powerful documentary 
                            that could save lives and educate healthcare professionals.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Production */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <Camera className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Bringing the Vision to Life</h3>
                          <p className="text-gray-700">
                            With Netflix veteran Carly Lassegard joining as Creative Executive Producer, the team filmed 
                            intimate interviews with Annie, Tony, their son Henry, and the medical professionals who saved Annie's life. 
                            The production captured both the trauma and the triumph of their journey.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Premiere & Recognition */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Recognition & Impact</h3>
                          <p className="text-gray-700">
                            "24 Days Without You" premiered at the Twin Cities Film Fest in 2024, where it won the Audience Award 
                            in the documentary category. The film was also selected for the San Diego Independent Cinema Awards 
                            and the Women's International Film Festival in Newark, NJ.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Director's Quote */}
          <section className="py-12 bg-teal-500 text-white">
            <div className="container mx-auto px-6 text-center">
              <blockquote className="text-2xl font-serif italic max-w-4xl mx-auto">
                "I am forever grateful to our production team for so beautifully bringing the vision to life 
                and to Annie for courageously sharing a story that was not easy to tell but needed to be told."
              </blockquote>
              <cite className="text-lg font-semibold mt-4 block opacity-90">— Rebecca Rizzio, Director</cite>
            </div>
          </section>
        </>

      <Footer />
    </div>
  );
}