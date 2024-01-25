# CBT2
using
- shadcn/ui : https://ui.shadcn.com/
    - npx create-next-app@13.4.12 project name --typescript --tailwind --eslint
- clerk
- planetscale
    npx prisma generate
    npx prisma db push
- uploadthing

//TODO
- prisma column 이름 바꾸기 (planetscale에선 column rename을 기본적으로 제공하지 않음) 어떻게 해결해야 하는지