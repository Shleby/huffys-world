'use client'

import { useState, useEffect } from 'react'

interface Skill {
  name: string
  level: number
  type: 'programming' | 'music'
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, type: 'programming' },
  { name: 'React', level: 85, type: 'programming' },
  { name: 'Node.js', level: 80, type: 'programming' },
  { name: 'Python', level: 75, type: 'programming' },
  { name: 'Piano', level: 95, type: 'music' },
  { name: 'Guitar', level: 80, type: 'music' },
  { name: 'Music Theory', level: 90, type: 'music' },
  { name: 'Composition', level: 85, type: 'music' },
]

export function AnimatedSkillTree() {
  const [activeSkills, setActiveSkills] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)]
      setActiveSkills((prev) => [...prev, randomSkill.name].slice(-3))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Programming Skills</h3>
        {skills
          .filter((skill) => skill.type === 'programming')
          .map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className={`bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out ${
                    activeSkills.includes(skill.name) ? 'opacity-100' : 'opacity-50'
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Music Skills</h3>
        {skills
          .filter((skill) => skill.type === 'music')
          .map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className={`bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out ${
                    activeSkills.includes(skill.name) ? 'opacity-100' : 'opacity-50'
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

