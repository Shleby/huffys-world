// components/music/MusicExperience.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Trophy, Music, School } from "lucide-react";

export function MusicExperience() {
  const performanceGroups = [
    {
      name: "The Cavaliers Drum and Bugle Corps",
      year: "2019",
      extra: "Age-Out",
      position: "Xylophone + Crotales",
    },
    {
      name: "The Crossmen Drum and Bugle Corps",
      year: "2017 - 2018",
      extra: "2 Years",
      position: "Marimba",
    },
    {
      name: "The Mandarins Drum and Bugle Corps",
      year: "2016",
      position: "Vibraphone",
    },
    {
      name: "Monarch Indoor Percussion",
      year: "2019",
      position: "Split-Center Marimba",
    },
    {
      name: "Gateway Indoor Percussion",
      year: "2017",
      position: "Vibrapone",
    },
    {
      name: "Resistance Indoor Percussion",
      year: "2014-2016",
      extra: "3 Years",
      position: "Vibraphone + Marimba",
    },
  ];

  const scholasticMusic = [
    {
      name: "The Pride of Oklahoma - University of Oklahoma",
      year: "2017",
      position: "Snare Drummer",
    },
    {
      name: "University of Oklahoma Indoor Drumline",
      year: "2015 - 2016",
      position: "Tenor Drummer and Center Marimba",
    },
    {
      name: "Choctaw High School Marching Band",
      year: "2013 - 2014",
      extra: "2 Years",
      position: "Tenor Drummer + Marimba + Vibraphone",
    },
    {
      name: "Choctaw High School Jazz Band 1 & 2",
      year: "2013 - 2014",
      extra: "2 Years",
      position: "Drumset + Jazz Vibraphone",
    },
    {
      name: "Choctaw High School Indoor Percussion",
      year: "2012",
      position: "Marimba",
    },
  ];

  const teachingPositions = [
    {
      role: "Front Ensemble Tech",
      org: "Resistance Indoor",
      period: "Since 2020",
    },
    {
      role: "Front Ensemble Tech",
      org: "The Crossmen",
      period: "2023 & 2025",
    },
    {
      role: "Front Ensemble Tech",
      org: "Zephyrus",
      period: "2022",
    },
    {
      role: "Front Ensemble Director",
      org: "Southmoore High School",
      period: "Since 2016",
    },
    {
      role: "Front Ensemble Director",
      org: "Oklahoma Baptist University",
      period: "2021-Present",
    },
  ];

  const masterClasses = [
    "Choctaw High School",
    "Mustang High School",
    "Union High School",
    "Edmond Memorial High School",
    "Catoosa High School",
    "Southmoore High School",
    "Carl Albert High School",
  ];

  return (
    <Card className="col-span-1 md:col-span-3 lg:col-span-4 bg-white dark:bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Music Experience</CardTitle>
        <CardDescription>
          A journey through performance and education
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Performance Journey */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-1 bg-blue-500 dark:bg-blue-400 h-full"></div>
            <div className="space-y-8 relative">
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Mic className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                  Performance Journey
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-neutral-100 dark:bg-neutral-950">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Front Ensemble Member
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {performanceGroups.map((group, index) => (
                          <li key={index} className="flex flex-col">
                            <div className="flex items-center">
                              <Trophy className="w-4 h-4 mr-2 text-yellow-500 dark:text-yellow-400" />
                              <span>{group.name}</span>
                              <Badge
                                variant="secondary"
                                className="ml-2 bg-purple-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              >
                                {group.year}
                              </Badge>
                              {group.extra && (
                                <Badge
                                  variant="secondary"
                                  className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                >
                                  {group.extra}
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-neutral-600 dark:text-neutral-300 ml-6 pl-2 border-l-2 border-neutral-200 dark:border-neutral-700">
                              {group.position}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-neutral-100 dark:bg-neutral-950">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Scholastic Music Experience
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {scholasticMusic.map((item, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex items-center">
                            <Music className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
                            <span className="font-semibold">{item.name}</span>
                            <Badge
                              variant="secondary"
                              className="ml-2 bg-purple-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            >
                              {item.year}
                            </Badge>
                            {item.extra && (
                              <Badge
                                variant="secondary"
                                className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              >
                                {item.extra}
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-neutral-600 dark:text-neutral-300 ml-6 pl-2 border-l-2 border-neutral-200 dark:border-neutral-700">
                            {item.position}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Teaching Experience */}
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <School className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                  Teaching Experience
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-neutral-100 dark:bg-neutral-950">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Front Ensemble Positions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {teachingPositions.map((position, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <span>
                              <span className="font-semibold">
                                {position.role}
                              </span>
                              <span className="text-sm text-neutral-600">
                                {" "}
                                - {position.org}
                              </span>
                            </span>
                            <Badge
                              variant="outline"
                              className="bg-purple-100 text-purple-800 dark:bg-red-900 dark:text-red-200"
                            >
                              {position.period}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-neutral-100 dark:bg-neutral-950">
                    <CardHeader>
                      <CardTitle className="text-lg">Master Classes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">
                        Conducted master classes at numerous Oklahoma high
                        schools, including:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {masterClasses.map((school, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
                          >
                            {school}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
