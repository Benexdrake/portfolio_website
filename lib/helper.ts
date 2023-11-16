import { Skill } from "@/models/aboutMe";

export const getIcon = (icon: string) => {
    return `/assets/icons/${icon}`
}

export const getSkills = (skill:string, skills:Skill[]) => {
    return skills.filter(x => x.type === skill);
  }

  export const getStars = (stars: number) => {
    const star = '★';
    const noStar = '☆';

    let allStars = '';

    for (let i = 0; i < stars; i++) {
        allStars += star;
    }
    for (let i = stars; i < 5; i++) {
        allStars += noStar;
    }
    return allStars;
}

export const getImage = (language:string) =>
{
 if(language)
 {
   if(language.includes('C#'))
   return '/assets/CSharp.png';
   else if(language.includes('TypeScript') || language.includes('HTML') || language.includes('CSS'))
   return '/assets/Typescript.png';
 }
 return '';
}