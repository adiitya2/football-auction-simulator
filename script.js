const teams = [
    { name: "Real Madrid", squad: [], budget: 110 },
    { name: "FC Barcelona", squad: [], budget: 110 },
    { name: "Atletico Madrid", squad: [], budget: 110 },
    { name: "Liverpool", squad: [], budget: 110 },
    { name: "Manchester United", squad: [], budget: 110 },
    { name: "Manchester City", squad: [], budget: 110 },
    { name: "Arsenal", squad: [], budget: 110 },
    { name: "Chelsea", squad: [], budget: 110 },
    { name: "Tottenham Hotspur", squad: [], budget: 110 },
    { name: "Bayern Munich", squad: [], budget: 110 },
    { name: "Borussia Dortmund", squad: [], budget: 110 },
    { name: "RB Leipzig", squad: [], budget: 110 },
    { name: "Paris Saint-Germain", squad: [], budget: 110 },
    { name: "Juventus", squad: [], budget: 110 },
    { name: "Napoli", squad: [], budget: 110 },
    { name: "Inter Milan", squad: [], budget: 110 },
    { name: "AC Milan", squad: [], budget: 110 }
];

const players = [
   
        // Openers
       
            { name: "Virat Kohli", role: "Opener", category: "Indian", price: 18, skillLevel: 9.4, performanceScore: 9.2, consistency: 9.2, description:'Elite opener with outstanding consistency and skill, always a match-winner.', photo: "https://images.mykhel.com/webp/images/cricket/players/8/3788.jpg" },
            { name: "Rohit Sharma", role: "Opener", category: "Indian", price: 18, skillLevel: 9.1, performanceScore: 8.9, consistency: 8.8, description:'A proven match-winner with great technique and solid consistency',photo: "https://images.mykhel.com/webp/images/cricket/players/6/3516.jpg" },
            { name: "Shubman Gill", role: "Opener", category: "Indian", price: 14, skillLevel: 8.8, performanceScore: 8.5, consistency: 8.6, description:'Consistently improving opener, with solid technique and growing match impact.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/11023.jpg" },
            { name: "KL Rahul", role: "Opener", category: "Indian", price: 15, skillLevel: 8.8, performanceScore: 8.3, consistency: 8.3, description:'Versatile opener with solid performances, though needs to maintain consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/8/6698.jpg" },
            { name: "Faf du Plessis", role: "Opener", category: "Overseas", price: 12, skillLevel: 8.7, performanceScore: 8.7, consistency: 8.6, description:'Experienced opener with a strong batting technique and impressive consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/4063.jpg" },
            { name: "Ruturaj Gaikwad", role: "Opener", category: "Indian", price: 12, skillLevel: 8.6, performanceScore: 8.3, consistency: 8.8, description:'Promising opener with solid batting and good consistency, showing great potential.',photo: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team4playerImgNoBg_1712854015853.png" },
            { name: "Jos Buttler", role: "Opener", category: "Overseas", price: 13, skillLevel: 9.0, performanceScore: 8.9, consistency: 8.8, description:'Dynamic opener with excellent power-hitting and consistency in key moments.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/4456.jpg" },
            { name: "Yashasvi Jaiswal", role: "Opener", category: "Indian", price: 13, skillLevel: 8.7, performanceScore: 8.4, consistency: 8.2, description:'Young, talented opener with solid potential but needs to fine-tune consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/12690.jpg" },
            { name: "Ishan Kishan", role: "Opener", category: "Indian", price: 11, skillLevel: 8.2, performanceScore: 8.1, consistency: 8.1, description:'Aggressive opener with a solid strike rate, though needs more consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/8234.jpg" },
            { name: "Travis Head", role: "Opener", category: "Overseas", price: 11, skillLevel: 8.6, performanceScore: 8.2, consistency: 8.3, description:'Explosive opener with great technique and solid contributions at the top.',photo: "https://d13ir53smqqeyp.cloudfront.net/fc-player-images/1443.png" },
        

                { name: "Sunil Narine", role: "Opener", category: "Overseas", price: 13, skillLevel: 8.6, performanceScore: 8.7, consistency: 8.2, description:'A skilled all-rounder with solid performances and consistency in the top order.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/4956.jpg" },
                { name: "David Warner", role: "Opener", category: "Overseas", price: 11, skillLevel: 8.9, performanceScore: 8.9, consistency: 8.8, description:'Experienced opener with solid technique and a consistent performer at the top.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/4275.jpg" },
                { name: "Abhishek Sharma", role: "Opener", category: "Indian", price: 10, skillLevel: 8.2, performanceScore: 8.0, consistency: 7.8, description:'A young opener with good promise but needs to work on consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/11022.jpg" },
                { name: "Mayank Agarwal", role: "Opener", category: "Indian", price: 6, skillLevel: 8.2, performanceScore: 7.9, consistency: 8.0, description:'Reliable opener with solid performances and consistent growth.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/5063.jpg" },
                { name: "Phil Salt", role: "Opener", category: "Overseas", price: 8, skillLevel: 8.4, performanceScore: 8.2, consistency: 8.3, description:'Aggressive opener with great hitting ability, though still refining consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/8012.jpg" },
                { name: "Quinton de Kock", role: "Opener", category: "Overseas", price: 7, skillLevel: 8.8, performanceScore: 8.7, consistency: 8.5, description:'Powerful opener with excellent technique and consistent performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/8/5648.jpg" },
                { name: "Shikhar Dhawan", role: "Opener", category: "Indian", price: 7, skillLevel: 8.8, performanceScore: 8.6, consistency: 8.9, description:'Experienced opener with great consistency and steady performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/3811.jpg" },
                { name: "Devon Conway", role: "Opener", category: "Overseas", price: 8, skillLevel: 8.8, performanceScore: 8.9, consistency: 8.9, description:'Strong opener with consistent performances and solid all-around batting.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/7559.jpg" },
                { name: "Prithvi Shaw", role: "Opener", category: "Indian", price: 6, skillLevel: 8.4, performanceScore: 8.0, consistency: 7.6, description:'Talented young opener, needs to work on consistency to become a key player.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/11021.jpg" },
                { name: "Rachin Ravindra", role: "Opener", category: "Overseas", price: 5, skillLevel: 8.7, performanceScore: 8.4, consistency: 8.2, description:'Promising young opener with great potential, but needs more consistency in performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/8321.jpg" },
            

    
        // Top Order
        { name: "Suryakumar Yadav", role: "Top Order", category: "Indian", price: 16, skillLevel: 9.3, performanceScore: 9.2, consistency: 9.1, description:'Stylish and consistent top-order batter, excellent in shorter format.',photo: "https://images.mykhel.com//webp/images/cricket/players/9/5089.jpg" },
        { name: "Shreyas Iyer", role: "Top Order", category: "Indian", price: 14, skillLevel: 8.9, performanceScore: 8.8, consistency: 8.9, description:'Reliable top-order batter, offers great technique and consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/7110.jpg" },
        { name: "Sanju Samson", role: "Top Order", category: "Indian", price: 15, skillLevel: 8.9, performanceScore: 8.6, consistency: 8.3, description:'Elegant top-order batter with growing consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/5335.jpg" },
        { name: "Glenn Maxwell", role: "Top Order", category: "Overseas", price: 13, skillLevel: 8.7, performanceScore: 8.6, consistency: 8.2, description:'Explosive all-rounder, great impact with both bat and ball.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/4894.jpg" },
        { name: "Sai Sudharsan", role: "Top Order", category: "Indian", price: 10, skillLevel: 8.3, performanceScore: 8.2, consistency: 8.4, description:'Talented young top-order batter with excellent promise.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/14572.jpg" },
        { name: "Aiden Markram", role: "Top Order", category: "Overseas", price: 7, skillLevel: 8.0, performanceScore: 7.9, consistency: 7.9, description:'Consistent top-order batter with versatile all-round skills.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/7165.jpg" },
        { name: "Ajinkya Rahane", role: "Top Order", category: "Indian", price: 6, skillLevel: 8.1, performanceScore: 8.0, consistency: 8.2, description:'Experienced and solid top-order batter with great technique.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/3845.jpg" },
        { name: "Mitchell Marsh", role: "Top Order", category: "Overseas", price: 7, skillLevel: 8.1, performanceScore: 7.9, consistency: 7.9, description:'Dynamic all-rounder, impactful top-order batter with all-round potential.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/4601.jpg" },
        { name: "Will Jacks", role: "Top Order", category: "Indian", price: 6, skillLevel: 7.9, performanceScore: 7.9, consistency: 8.0, description:'Solid all-rounder with consistent contributions in all departments.',photo: "https://images.mykhel.com//webp/images/cricket/players/5/10865.jpg?v=5" },
        { name: "Johnny Bairstow", role: "Top Order", category: "Overseas", price: 5, skillLevel: 7.9, performanceScore: 7.8, consistency: 8.0, description:'Aggressive top-order batter, excellent power-hitting ability.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/4249.jpg" },

        //Middle Order
        { name: "Hardik Pandya", role: "Middle Order", category: "Indian", price: 18, skillLevel: 9.3, performanceScore: 9.2, consistency: 9.1, description:'Dynamic all-rounder, impactful in crucial moments.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/7780.jpg" },
        { name: "Rishabh Pant", role: "Middle Order", category: "Indian", price: 17, skillLevel: 9.0, performanceScore: 8.7, consistency: 8.9, description:'Explosive top-order batter with aggressive and impactful performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/8229.jpg" },
        { name: "Venkatesh Iyer", role: "Middle Order", category: "Indian", price: 11, skillLevel: 8.4, performanceScore: 8.2, consistency: 8.3, description:'Growing all-rounder, offering stability with both bat and ball.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/13642.jpg" },
        { name: "Shivam Dube", role: "Middle Order", category: "Indian", price: 12, skillLevel: 8.6, performanceScore: 8.5, consistency: 8.5, description:'Powerful batter with the potential to grow further.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/12293.jpg" },
        { name: "Nicholas Pooran", role: "Middle Order", category: "Overseas", price: 13, skillLevel: 8.9, performanceScore: 8.8, consistency: 8.6, description:'Aggressive middle-order batter with excellent strike-rate and consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/6763.jpg" },
        { name: "Heinrich Klaasen", role: "Middle Order", category: "Overseas", price: 11, skillLevel: 8.9, performanceScore: 9.0, consistency: 8.8, description:'Reliable middle-order batter with calm approach in critical situations.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/7620.jpg" },
        { name: "Tilak Varma", role: "Middle Order", category: "Indian", price: 11, skillLevel: 8.6, performanceScore: 8.7, consistency: 8.4, description:'Young and talented batter, showing great promise with each performance.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/12691.jpg" },
        { name: "Cameron Green", role: "Middle Order", category: "Overseas", price: 10, skillLevel: 8.4, performanceScore: 8.2, consistency: 8.3, description:'Strong all-rounder with consistent growth and impact.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/10749.jpg" },
        { name: "Rajat Patidar", role: "Middle Order", category: "Indian", price: 9, skillLevel: 8.2, performanceScore: 8.0, consistency: 8.0, description:'Rising middle-order batter, shows consistency and reliability.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/12334.jpg" },
        { name: "Shimron Hetmyer", role: "Middle Order", category: "Overseas", price: 8, skillLevel: 8.1, performanceScore: 8.0, consistency: 7.9, description:'Aggressive and powerful middle-order batter with great potential.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/7195.jpg" },
       
        { name: "Kane Williamson", role: "Middle Order", category: "Overseas", price: 8, skillLevel: 9.0, performanceScore: 8.8, consistency: 8.8, description:'Calm and composed top-order batter with a solid technique.',photo: "https://images.mykhel.com/webp/images/cricket/players/7/4637.jpg" },
        { name: "Devdutt Padikkal", role: "Middle Order", category: "Indian", price: 8, skillLevel: 8.2, performanceScore: 7.9, consistency: 7.8, description:'Talented batter, showing consistent growth and performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/12292.jpg" },
        { name: "Nitish Rana", role: "Middle Order", category: "Indian", price: 7, skillLevel: 8.2, performanceScore: 8.0, consistency: 8.0, description:'Dependable middle-order batter, offers consistency in performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/7686.jpg" },
        { name: "Dhruv Jurel", role: "Middle Order", category: "Indian", price: 6, skillLevel: 8.1, performanceScore: 7.9, consistency: 8.0, description:'A promising young batter, showing great potential for future success.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/12694.jpg" },
        { name: "Daryl Mitchell", role: "Middle Order", category: "Overseas", price: 7, skillLevel: 8.1, performanceScore: 7.9, consistency: 8.2, description:'Reliable all-rounder with consistent contributions.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/6881.jpg" },
        { name: "Liam Livingstone", role: "Middle Order", category: "Overseas", price: 7, skillLevel: 8.3, performanceScore: 8.2, consistency: 8.1, description:'Powerful batter with great hitting potential and impact in matches.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/6724.jpg" },
        { name: "Rahul Tripathi", role: "Middle Order", category: "Indian", price: 6, skillLevel: 8.0, performanceScore: 7.9, consistency: 8.0, description:'Consistent and reliable middle-order batter, adds great depth to the team.',photo: "https://images.mykhel.com/webp/images/cricket/players/8/11108.jpg" },
        { name: "Harry Brook", role: "Middle Order", category: "Overseas", price: 6, skillLevel: 8.1, performanceScore: 8.1, consistency: 8.2, description:'Rising batter with great promise and growing consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/9845.jpg" },
        { name: "David Miller", role: "Middle Order", category: "Overseas", price: 7, skillLevel: 8.6, performanceScore: 8.3, consistency: 8.5, description:'Experienced middle-order batter, known for finishing matches well.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/4804.jpg" },
        { name: "Vijay Shankar", role: "Middle Order", category: "Indian", price: 5, skillLevel: 7.9, performanceScore: 7.8, consistency: 7.7, description:'Versatile all-rounder with steady contributions to both departments.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/6621.jpg" },
    

        // Lower Middle Order
        { name: "MS Dhoni", role: "Lower Middle Order", category: "Indian", price: 18, skillLevel: 9.4, performanceScore: 9.3, consistency: 9.2, description:'Legendary finisher, excellent under pressure, with unmatched leadership.',photo: "https://qph.cf2.quoracdn.net/main-qimg-0570a8f07df934109bb78ef5b33cd8ff" },
        { name: "Dinesh Karthik", role: "Lower Middle Order", category: "Indian", price: 13, skillLevel: 8.9, performanceScore: 8.8, consistency: 8.7, description:'Reliable finisher with excellent wicket-keeping skills.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/3210.jpg" },
        { name: "Rinku Singh", role: "Lower Middle Order", category: "Indian", price: 12, skillLevel: 8.5, performanceScore: 8.4, consistency: 8.4, description:'A rising star with great power-hitting abilities.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/11102.jpg" },
        { name: "Marcus Stoinis", role: "Lower Middle Order", category: "Overseas", price: 12, skillLevel: 8.4, performanceScore: 8.3, consistency: 8.3, description:'Solid all-rounder, impactful with both bat and ball.',photo: "https://images.mykhel.com/webp/images/cricket/players/7/5957.jpg" },
        { name: "Krunal Pandya", role: "Lower Middle Order", category: "Indian", price: 11, skillLevel: 8.4, performanceScore: 8.1, consistency: 8.2, description:'A reliable all-rounder with consistent performances in both departments.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/9686.jpg" },
        { name: "Tristan Stubbs", role: "Lower Middle Order", category: "Overseas", price: 9, skillLevel: 8.1, performanceScore: 7.9, consistency: 7.9, description:'Young and promising batter with a great potential for power-hitting.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/14343.jpg" },
        { name: "Marco Jansen", role: "Lower Middle Order", category: "Overseas", price: 7, skillLevel: 8.0, performanceScore: 7.8, consistency: 7.7, description:'Tall all-rounder, adds depth with bat and ball.',photo: "https://images.mykhel.com//webp/images/cricket/players/3/12663.jpg" },
        { name: "Rahul Tewatia", role: "Lower Middle Order", category: "Indian", price: 8, skillLevel: 8.1, performanceScore: 8.0, consistency: 8.0, description:'Match finisher with great batting depth and consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/7339.jpg" },
        { name: "Tim David", role: "Lower Middle Order", category: "Overseas", price: 6, skillLevel: 8.2, performanceScore: 7.9, consistency: 7.9, description:'Explosive finisher with great hitting abilities in high-pressure situations.',photo: "https://images.mykhel.com//webp/images/cricket/players/3/11463.jpg" },
        { name: "Jitesh Sharma", role: "Lower Middle Order", category: "Indian", price: 5, skillLevel: 7.9, performanceScore: 7.8, consistency: 7.9, description:'Dynamic middle-order batter, known for his excellent striking abilities.',photo: "https://images.mykhel.com/webp/images/cricket/players/8/9688.jpg" },
        
    
        // Lower Order
    { name: "Ravindra Jadeja", role: "Lower Order", category: "Indian", price: 16, skillLevel: 9.2, performanceScore: 9.0, consistency: 8.9, description:'Reliable all-rounder, strong in both batting and bowling.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/3856.jpg" },
    { name: "Andre Russell", role: "Lower Order", category: "Overseas", price: 14, skillLevel: 9.2, performanceScore: 9.0, consistency: 8.7, description:'Powerful all-rounder with game-changing capabilities.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/4913.jpg" },
    { name: "Axar Patel", role: "Lower Order", category: "Indian", price: 15, skillLevel: 8.9, performanceScore: 8.9, consistency: 8.9, description:'Steady all-rounder, always provides solid contributions.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/6626.jpg" },
    { name: "Ravichandran Ashwin", role: "Lower Order", category: "Indian", price: 13, skillLevel: 8.8, performanceScore: 8.7, consistency: 8.6, description:'A craftily skilled off-spinner, can turn games on his own.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/3795.jpg" },
    { name: "Washington Sundar", role: "Lower Order", category: "Indian", price: 10, skillLevel: 8.5, performanceScore: 8.4, consistency: 8.5, description:'Consistent all-rounder with solid performances in both departments.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/8240.jpg" },
    { name: "Sam Curran", role: "Lower Order", category: "Overseas", price: 8, skillLevel: 8.2, performanceScore: 8.2, consistency: 8.1, description:'A dynamic all-rounder, brings stability with consistent performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/8/7888.jpg" },
    { name: "Ben Stokes", role: "Lower Order", category: "Overseas", price: 7, skillLevel: 8.7, performanceScore: 8.7, consistency: 8.2, description:'Explosive all-rounder with game-changing abilities.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/4489.jpg" },
    { name: "Riyan Parag", role: "Lower Order", category: "Indian", price: 6, skillLevel: 7.9, performanceScore: 7.9, consistency: 7.7, description:'Talented young all-rounder with potential for big performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/11313.jpg" },
    { name: "Moeen Ali", role: "Lower Order", category: "Overseas", price: 5, skillLevel: 8.2, performanceScore: 8.1, consistency: 8.0, description:'Versatile all-rounder with great impact with both bat and ball.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/3992.jpg" },
    { name: "Shahrukh Khan", role: "Lower Order", category: "Indian", price: 5, skillLevel: 7.8, performanceScore: 7.7, consistency: 7.6, description:'Strong finisher, known for his power-hitting in crucial moments.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/13720.jpg" },

       // Bowlers
        
    { name: "Jasprit Bumrah", role: "Bowler", category: "Indian", price: 18, skillLevel: 9.4, performanceScore: 9.3, consistency: 9.3, description:'World-class bowler, capable of taking wickets under pressure.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/6684.jpg" },
    { name: "Mohammad Shami", role: "Bowler", category: "Indian", price: 13, skillLevel: 8.7, performanceScore: 8.8, consistency: 8.6, description:'Pacer with sharp swing, though consistency can improve.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/5051.jpg" },
    { name: "Rashid Khan", role: "Bowler", category: "Overseas", price: 12, skillLevel: 9.0, performanceScore: 9.1, consistency: 9.0, description:'Elite leg-spinner, consistently performs at the highest level.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/8141.jpg" },
    { name: "Arshdeep Singh", role: "Bowler", category: "Indian", price: 16, skillLevel: 8.6, performanceScore: 8.8, consistency: 8.7, description:'Young pacer excelling in death overs, promising future ahead.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/11524.jpg" },
    { name: "Kagiso Rabada", role: "Bowler", category: "Overseas", price: 11, skillLevel: 9.2, performanceScore: 9.0, consistency: 8.9, description:'Exceptional pacer with great pace and aggression.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/6580.jpg" },
    { name: "Mitchell Starc", role: "Bowler", category: "Overseas", price: 15, skillLevel: 9.1, performanceScore: 8.9, consistency: 8.7, description:'Fast pacer with deadly accuracy and sharp deliveries.',photo: "https://images.mykhel.com/webp/images/cricket/players/0/4910.jpg" },
    { name: "Mark Wood", role: "Bowler", category: "Overseas", price: 6, skillLevel: 8.2, performanceScore: 8.3, consistency: 8.0, description:'Explosive speed, very effective when in full rhythm.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/5055.jpg" },
    { name: "Pat Cummins", role: "Bowler", category: "Overseas", price: 16, skillLevel: 8.9, performanceScore: 8.9, consistency: 8.5, description:'Skillful pacer and excellent leader with consistent performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/5164.jpg" },
    { name: "Mohammed Siraj", role: "Bowler", category: "Indian", price: 13, skillLevel: 8.7, performanceScore: 8.5, consistency: 8.4, description:'Pacer with sharp bowling, showing consistent growth.',photo: "https://images.mykhel.com//webp/images/cricket/players/0/11100.jpg" },
    { name: "Trent Boult", role: "Bowler", category: "Overseas", price: 12, skillLevel: 9.0, performanceScore: 9.0, consistency: 8.9, description:'A world-class swing bowler with proven track record.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/4281.jpg" },

    { name: "Deepak Chahar", role: "Bowler", category: "Indian", price: 12, skillLevel: 8.4, performanceScore: 8.4, consistency: 8.4, description:'Swing bowler with solid performances, though pace can be improved.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/5059.jpg" },
    { name: "Yuzvendra Chahal", role: "Bowler", category: "Indian", price: 8, skillLevel: 8.8, performanceScore: 8.6, consistency: 8.4, description:'A skilled leg-spinner, needs more consistency in big games.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/5085.jpg" },
    { name: "Matheesha Pathirana", role: "Bowler", category: "Overseas", price: 9, skillLevel: 8.6, performanceScore: 8.5, consistency: 8.4, description:'A young pacer with raw pace and great potential for growth.', photo: "https://images.mykhel.com/webp/images/cricket/players/0/13340.jpg" },
    { name: "Shardul Thakur", role: "Bowler", category: "Indian", price: 6, skillLevel: 7.8, performanceScore: 7.7, consistency: 7.8, description:'Versatile all-rounder, though can be inconsistent at times.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/5919.jpg" },
    { name: "Kuldeep Yadav", role: "Bowler", category: "Indian", price: 8, skillLevel: 8.6, performanceScore: 8.4, consistency: 8.4, description:'Talented wrist-spinner, could benefit from more consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/5399.jpg" },
    { name: "Bhuvneshwar Kumar", role: "Bowler", category: "Indian", price: 11, skillLevel: 8.9, performanceScore: 8.8, consistency: 8.8, description:'Experienced swing bowler, slightly lacking pace at times.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/4384.jpg" },
    { name: "Harshal Patel", role: "Bowler", category: "Indian", price: 10, skillLevel: 8.4, performanceScore: 8.2, consistency: 8.2, description:'Effective in death overs, but needs to reduce economy rate.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/5343.jpg" },
    { name: "Gerald Coetzee", role: "Bowler", category: "Overseas", price: 7, skillLevel: 7.5, performanceScore: 7.4, consistency: 7.6, description:'Promising pacer with explosive pace and room to develop.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/11439.jpg" },
    { name: "Josh Hazelwood", role: "Bowler", category: "Overseas", price: 5, skillLevel: 9.0, performanceScore: 8.9, consistency: 8.8, description:'Reliable pacer, consistently delivers with precision.',photo: "https://images.mykhel.com//webp/images/cricket/players/8/4818.jpg" },
    { name: "Ravi Bishnoi", role: "Bowler", category: "Indian", price: 7, skillLevel: 8.4, performanceScore: 8.2, consistency: 8.2, description:'An exciting young leg-spinner with steady improvements.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/12696.jpg" },

    { name: "T Natarajan", role: "Bowler", category: "Indian", price: 8, skillLevel: 8.2, performanceScore: 8.0, consistency: 8.0, description:'A reliable Indian bowler known for sharp yorkers, maintaining strong performance under pressure.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/11096.jpg" },
    { name: "Avesh Khan", role: "Bowler", category: "Indian", price: 6, skillLevel: 8.0, performanceScore: 7.8, consistency: 7.9, description:'Promising pacer with aggressive spells, though occasionally inconsistent in execution.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/7103.jpg" },
    { name: "Khaleel Ahmed", role: "Bowler", category: "Indian", price: 5, skillLevel: 7.8, performanceScore: 7.6, consistency: 7.7, description:'Left-arm pacer with decent skills but room for improvement in consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/8239.jpg" },
    { name: "Yash Dayal", role: "Bowler", category: "Indian", price: 5, skillLevel: 7.7, performanceScore: 7.5, consistency: 7.6, description:'Talented bowler with steady progress, balancing skill and consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/14451.jpg" },
    { name: "Wanindu Hasaranga", role: "Bowler", category: "Overseas", price: 6, skillLevel: 8.5, performanceScore: 8.5, consistency: 8.0, description:'Versatile overseas spinner excelling in crucial breakthroughs with consistent impact.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/8261.jpg" },
    { name: "Tushar Deshpande", role: "Bowler", category: "Indian", price: 5, skillLevel: 7.7, performanceScore: 7.6, consistency: 7.5, description:'Budding Indian seamer striving for better precision and reliability.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/9711.jpg" },
    { name: "Prasidh Krishna", role: "Bowler", category: "Indian", price: 6, skillLevel: 8.2, performanceScore: 8.1, consistency: 8.0, description:'Rising pacer with pace and control, consistently delivering impactful spells.',photo: "https://images.mykhel.com/webp/images/cricket/players/3/11993.jpg" },
    { name: "Anrich Nortje", role: "Bowler", category: "Overseas", price: 7, skillLevel: 8.8, performanceScore: 8.5, consistency: 8.0, description:'Dynamic overseas quick, combining speed and accuracy to trouble batsmen.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/11455.jpg" },
    { name: "Mitchell Santner", role: "Bowler", category: "Overseas", price: 6, skillLevel: 8.6, performanceScore: 8.3, consistency: 8.7, description:'Experienced overseas spinner known for his economical spells and dependability.',photo: "https://images.mykhel.com/webp/images/cricket/players/6/7526.jpg" },
    { name: "Harshit Rana", role: "Bowler", category: "Indian", price: 5, skillLevel: 7.7, performanceScore: 7.4, consistency: 7.5, description:'A young prospect showing potential but requiring more experience for consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/8/15728.jpg" },

    
    { name: "Karn Sharma", role: "Bowler", category: "Indian", price: 5, skillLevel: 7.5, performanceScore: 7.2, consistency: 7.3, description:'Veteran spinner offering utility but limited impact in recent outings.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/4412.jpg" },
    { name: "Mohit Sharma", role: "Bowler", category: "Indian", price: 5, skillLevel: 7.8, performanceScore: 7.5, consistency: 7.8, description:'Experienced bowler with strategic skills, aiming for improved execution.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/5929.jpg" },
    { name: "Sandeep Sharma", role: "Bowler", category: "Indian", price: 5, skillLevel: 7.9, performanceScore: 7.6, consistency: 7.7, description:'Reliable swing bowler with steady contributions in key moments.',photo: "https://images.mykhel.com/webp/images/cricket/players/2/5402.jpg" },
    { name: "Shivam Mavi", role: "Bowler", category: "Indian", price: 4, skillLevel: 7.4, performanceScore: 7.0, consistency: 7.3, description:'Energetic pacer with potential to grow into a dependable bowler.',photo: "https://images.mykhel.com/webp/images/cricket/players/9/11039.jpg" },
    { name: "Umesh Yadav", role: "Bowler", category: "Indian", price: 4, skillLevel: 7.8, performanceScore: 7.6, consistency: 7.5, description:'Veteran Indian pacer blending pace and experience effectively.',photo: "https://images.mykhel.com/webp/images/cricket/players/5/4395.jpg" },
    { name: "Mukesh Kumar", role: "Bowler", category: "Indian", price: 4, skillLevel: 7.7, performanceScore: 7.5, consistency: 7.6, description:'Emerging bowler working on refining accuracy and consistency. ',photo: "https://images.mykhel.com/webp/images/cricket/players/4/13814.jpg" },
    { name: "Noor Ahmad", role: "Bowler", category: "Overseas", price: 5, skillLevel: 8.4, performanceScore: 8.3, consistency: 8.5, description:'Young overseas spinner showing great promise with consistent performances.',photo: "https://images.mykhel.com/webp/images/cricket/players/7/13157.jpg" },
    { name: "Vaibhav Arora", role: "Bowler", category: "Indian", price: 4, skillLevel: 6.8, performanceScore: 6.5, consistency: 6.6, description:'Emerging pacer showing promise, though needing to refine consistency.',photo: "https://images.mykhel.com/webp/images/cricket/players/4/14004.jpg" },
    { name: "Piyush Chawla", role: "Bowler", category: "Indian", price: 4, skillLevel: 7.2, performanceScore: 7.0, consistency: 7.5, description:'Experienced spinner delivering reliable performances when needed.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/3351.jpg" },
    { name: "Maheesh Theekshana", role: "Bowler", category: "Overseas", price: 4, skillLevel: 8.0, performanceScore: 7.8, consistency: 7.9, description:'Overseas spinner excelling in control and offering consistent breakthroughs.',photo: "https://images.mykhel.com/webp/images/cricket/players/1/14211.jpg" },

]
     

let currentPlayerIndex = 0;
let userTeam = null;
let currentRole = "Opener"; // Start with the first role
let rolesQueue = ["Opener", "Top Order", "Middle Order", "Lower Middle Order", "Lower Order", "Bowler"];
const roleLimits = {
    "Opener": 2,
    "Top Order": 1,
    "Middle Order": 2,
    "Lower Middle Order": 1,
    "Lower Order": 1,
    "Bowler": 4
  };

  // Tracking number of players bought for each role
  const roleCount = {
    "Opener": 0,
    "Top Order": 0,
    "Middle Order": 0,
    "Lower Middle Order": 0,
    "Lower Order":0,
    "Bowler": 0
  };

// Group players by role
const groupedPlayers = players.reduce((acc, player) => {
    if (!acc[player.role]) {
        acc[player.role] = [];
    }
    acc[player.role].push(player);
    return acc;
}, {});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(teams);
console.log("Randomized Team Order:", teams);

function randomizeFirstRole() {
    const rolePlayers = groupedPlayers[currentRole];
    shufflePlayers(rolePlayers); // Shuffle only the players in the current role (e.g., Batsman)
}


// Shuffle function to randomize an array
function shufflePlayers(players) {
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]]; // Swap elements
    }
}

// Toggle visibility of the game rules section
document.getElementById('showRulesButton').addEventListener('click', function() {
    const gameRules = document.getElementById('gameRules');
    gameRules.classList.toggle('hidden'); // Toggle the visibility of the game rules
});


document.getElementById("userDetailsForm").addEventListener("submit", function (e) {
    e.preventDefault();
    userTeam = document.getElementById("teamSelect").value;
    document.getElementById("userTeamName").innerText = userTeam;
    
    // Set team colors dynamically based on selection
    setTeamColors(userTeam);
    
    // Hide welcome page and show auction page
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("auctionPage").classList.remove("hidden");
    initializeAuction();
});


// Set team colors based on selected team
function setTeamColors(teamName) {
    const colorScheme = {
        "Real Madrid": {
            primary: "#FFFFFF", // White
            secondary: "#FEBE10" // Gold
        },
        "FC Barcelona": {
            primary: "#A50044", // Maroon
            secondary: "#004D98" // Blue
        },
        "Atletico Madrid": {
            primary: "#C8102E", // Red
            secondary: "#FFFFFF" // White
        },
        "Liverpool": {
            primary: "#C8102E", // Red
            secondary: "#00B2A9" // Teal
        },
        "Manchester United": {
            primary: "#DA291C", // Red
            secondary: "#FBE122" // Yellow
        },
        "Manchester City": {
            primary: "#6CABDD", // Sky Blue
            secondary: "#1C2C5B" // Navy
        },
        "Arsenal": {
            primary: "#EF0107", // Red
            secondary: "#9C824A" // Gold
        },
        "Chelsea": {
            primary: "#034694", // Blue
            secondary: "#FFFFFF" // White
        },
        "Tottenham Hotspur": {
            primary: "#132257", // Navy
            secondary: "#FFFFFF" // White
        },
        "Bayern Munich": {
            primary: "#DC052D", // Red
            secondary: "#0066B2" // Blue
        },
        "Borussia Dortmund": {
            primary: "#FDE100", // Yellow
            secondary: "#000000" // Black
        },
        "RB Leipzig": {
            primary: "#FFFFFF", // White
            secondary: "#E32219" // Red
        },
        "Paris Saint-Germain": {
            primary: "#004170", // Navy
            secondary: "#DA291C" // Red
        },
        "Juventus": {
            primary: "#FFFFFF", // White
            secondary: "#000000" // Black
        },
        "Napoli": {
            primary: "#0077C8", // Blue
            secondary: "#FFFFFF" // White
        },
        "Inter Milan": {
            primary: "#00529F", // Blue
            secondary: "#000000" // Black
        },
        "AC Milan": {
            primary: "#AC1A2F", // Red
            secondary: "#000000" // Black
        }
    };

    const teamColors = colorScheme[teamName];
    if (teamColors) {
        document.body.style.setProperty('--primary-color', teamColors.primary);
        document.body.style.setProperty('--secondary-color', teamColors.secondary);
        document.querySelector(".header").style.backgroundColor = teamColors.primary;
    }
}



// Handle user details form submission
document.getElementById("userDetailsForm").addEventListener("submit", function (e) {
    e.preventDefault();
    userTeam = document.getElementById("teamSelect").value;
    document.getElementById("userTeamName").innerText = userTeam;
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("auctionPage").classList.remove("hidden");
    initializeAuction();
});

function initializeAuction() {
    console.log(groupedPlayers);
    updateTeams();
    updateBudget();
    showNextPlayer();
    addEventListeners();
    //fluctuatePrice();
}

// Move to the next role after auctioning all players of current role
function moveToNextRole() {
    const currentRoleIndex = rolesQueue.indexOf(currentRole);
    if (currentRoleIndex + 1 < rolesQueue.length) {
        currentRole = rolesQueue[currentRoleIndex + 1];
        currentPlayerIndex = 0;
        displayRoleChangeMessage(`All players for ${rolesQueue[currentRoleIndex]} are auctioned. Starting ${currentRole} auction.`);
        initializeAuction();
    }  
    else {
        displayRoleChangeMessage("Auction complete for all roles!");

        // Once auction is complete, show all teams and squads
        setTimeout(() => {
            endAuction(); // Show squads page after auction completion
            generateSquadPDF();
        }, 3000); // Delay the squad display for 3 seconds
    }
}

        updateTeams();
        showNextPlayer();


        
function fluctuatePrice(basePrice) {
    const increments = [0.25, 0.50, 0.75, 0.00]; // Allowed decimal increments
    const maxFluctuation = 2.5; // Maximum fluctuation
        
            // Generate random fluctuation value within ±2.5
        const randomFluctuation = 
            (Math.random() < 0.5 ? -1 : 1) * // Randomly decide positive or negative
            (Math.floor(Math.random() * 10) / 10) * maxFluctuation;
        
            // Ensure fluctuation in allowed increments
            const decimalPart = increments[Math.floor(Math.random() * increments.length)];
            const newPrice = Math.max(0, basePrice + randomFluctuation + decimalPart);
        
            // Round to two decimal places
            return parseFloat(newPrice.toFixed(2));
}
    
        // Simulate auction
        function startAuction() {
            // Randomize the players for each role once auction starts
            randomizeFirstRole();
            
            // Initialize auction by setting the first role and starting player index
            currentRole = 'Opener'; // Choose the starting role (or allow dynamic switching)
            currentPlayerIndex = 0;
        
            // Show the first player
            showNextPlayer();
        }        


// Update teams' information
function updateTeams() {
    const teamTabs = document.getElementById("teamNames");
    const teamSquad = document.getElementById("teamSquad");
    const upcomingPlayersList = document.getElementById("upcomingPlayersList");
    
    teamTabs.innerHTML = '';
    teamSquad.innerHTML = '';
    upcomingPlayersList.innerHTML = '';

    // Display upcoming players based on current role
    const rolePlayers = groupedPlayers[currentRole];
    rolePlayers.slice(currentPlayerIndex).forEach(player => {
        const li = document.createElement("li");
        li.innerText = `${player.name} `;
        upcomingPlayersList.appendChild(li);
    });

    // Display each team's tab and squad
    teams.forEach((team, index) => {
        const button = document.createElement("button");
        button.innerText = team.name;
        button.addEventListener("click", function () {
            displayTeamSquad(index);
        });
        teamTabs.appendChild(button);

        const teamDiv = document.createElement("div");
        teamDiv.classList.add("team");
        teamDiv.id = `team-${team.name}`;
        teamDiv.style.display = "none"; 

        const squadList = document.createElement("ul");
        squadList.innerHTML = "<h3>Bought Players</h3>";
        team.squad.forEach(player => {
            const li = document.createElement("li");
            const playerRating = calculatePlayerRating(player);

            li.innerText = `${player.name} - ₹${player.newPrice} Cr - Rating: ${playerRating}`;
            squadList.appendChild(li);
        });

        teamDiv.appendChild(squadList);
        teamSquad.appendChild(teamDiv);
    });

    displayTeamSquad(teams.findIndex(t => t.name === userTeam));
}


// Display the squad of a selected team
function displayTeamSquad(teamIndex) {
    const teamSquad = document.getElementById("teamSquad");
    const teams = teamSquad.getElementsByClassName("team");

    for (let i = 0; i < teams.length; i++) {
        teams[i].style.display = "none";
    }

    teams[teamIndex].style.display = "block";

    const teamTabs = document.getElementById("teamNames");
    const buttons = teamTabs.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    buttons[teamIndex].classList.add("active");
}


// Update budget display
function updateBudget() {
    const teamBudgets = document.getElementById("teamBudgets");
    teamBudgets.innerHTML = "";

    teams.forEach(team => {
        const budgetElement = document.createElement("p");
        budgetElement.innerText = `${team.name}: ₹${team.budget} Cr`;
        teamBudgets.appendChild(budgetElement);
    });
}

function updatePlayerPhoto(player) {
    const playerPhotoElement = document.getElementById("playerPhoto");

    // Set the player's photo
    playerPhotoElement.src = player.photo;

    // Add error handling for missing or invalid photo URLs
    playerPhotoElement.onerror = () => {
        playerPhotoElement.src = "https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png"; // Default image URL
    };
}

// Show the next player for auction
function showNextPlayer() {
    const rolePlayers = groupedPlayers[currentRole];
    
    if (currentPlayerIndex < rolePlayers.length) {
        const player = rolePlayers[currentPlayerIndex];
        console.log(player); // Debugging log to check if the player is fetched correctly
        if (!player.newPrice) {
            player.newPrice = fluctuatePrice(player.price); // Calculate fluctuated price
        }
        updatePlayerPhoto(player);
        document.getElementById("playerPhoto").src = player.photo;
        document.getElementById("playerName").innerText = player.name;
        document.getElementById("playerRole").innerText = player.role;
        document.getElementById("playerPrice").innerText = `₹${player.newPrice} Cr`; // Display price with the currency symbol
        document.getElementById("playerCategory").innerText = player.category;
        document.getElementById("skillLevel").innerText = player.skillLevel;
        document.getElementById("performanceScore").innerText = player.performanceScore;
        document.getElementById("consistency").innerText = player.consistency;
        document.getElementById("description").innerText = player.description;
        
    } else {
        moveToNextRole();
    }
}


function updateBudget() {
    const teamBudgets = document.getElementById("teamBudgets");
    teamBudgets.innerHTML = "";

    // Create a table element for systematic display
    const table = document.createElement("table");
    table.classList.add("budget-table");

    // Add table header
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>Team Name</th>
        <th>Remaining Budget (₹)</th>
        <th>Players Bought</th>
    `;
    table.appendChild(headerRow);

    // Add rows for each team's data
    teams.forEach(team => {
        const row = document.createElement("tr");
        const playerCount = team.squad.length; // Get the number of players bought

        row.innerHTML = `
            <td>${team.name}</td>
            <td>${team.budget} Cr</td>
            <td>${playerCount}</td>
        `;

        table.appendChild(row);
    });

    teamBudgets.appendChild(table);
}


// Add event listeners for buttons
function addEventListeners() {
    document.getElementById("buyButton").addEventListener("click", buyPlayer);
    document.getElementById("passButton").addEventListener("click", passPlayer);
}


// Handle buying a player
function buyPlayer() {
    const rolePlayers = groupedPlayers[currentRole];
    const player = rolePlayers[currentPlayerIndex];
    const team = teams.find(t => t.name === userTeam);

    // Check if the team already has 11 players
    if (team.squad.length >= 11) {
        alert("You can't have more than 11 players in your squad!");
        return; // Prevent buying more than 11 players
    }
    
    if (roleCount[currentRole] >= roleLimits[currentRole]) {
        showDenyMessage(`You can't buy more than ${roleLimits[currentRole]} ${currentRole}(s)!`);
        return;
      }

    // Ensure enough budget to buy the player
    if (team.budget >= player.newPrice) {
        // Deduct the price from the team's budget
        team.budget -= player.newPrice;

        // Add the player to the team's squad
        team.squad.push(player);
        roleCount[currentRole]++;
        // Show the purchase message
        showPurchaseMessage(`${userTeam} acquired ${player.name} for ₹${player.newPrice} Cr.`);

        // Move to the next player in the auction list
        currentPlayerIndex++;

        // Update the teams and budgets after the purchase
        updateTeams();
        updateBudget();

        // Show the next player for auction
        showNextPlayer();
    } else {
        alert("Not enough budget to buy this player!");
    }
} 


// function buyPlayer() {
//     const rolePlayers = groupedPlayers[currentRole];
//     const player = rolePlayers[currentPlayerIndex];
//     const team = teams.find(t => t.name === userTeam);
//     if (team.squad.length >= 11) {
//         alert("You can't have more than 11 players in your squad!");
//         return; // Prevent buying more than 11 players
//     }
//     if (roleCount[currentRole] >= roleLimits[currentRole]) {
//         alert(`You can't buy more than ${roleLimits[currentRole]} ${currentRole}(s)!`);
//     }
//     if (team.budget >= player.newPrice) {
//         team.budget -= player.newPrice;
//         team.squad.push(player);
//         roleCount[currentRole]++;
//         showPurchaseMessage(`${userTeam} bought ${player.name} for ₹${player.newPrice} Cr`);
//         currentPlayerIndex++;
//         updateTeams();
//         updateBudget();
//         showNextPlayer();
//     } else {
//         alert("Not enough budget to buy this player!");
//     }
// }


// Handle passing a player
function passPlayer() {
    const rolePlayers = groupedPlayers[currentRole];
    const player = rolePlayers[currentPlayerIndex];

    // Debugging log: Track player being passed and their price
    console.log(`Passing Player: ${player.name}, Price: ₹${player.newPrice}`);

    // Step 1: Filter eligible teams (can afford the player and need the role)
    const eligibleTeams = teams.filter(team => {
        const roleCount = team.squad.filter(p => p.role === currentRole).length;
        return roleCount < getMaxPlayersPerTeam(currentRole) && team.budget >= player.newPrice;
    });

    // Step 2: Exclude the user-selected team from the list of eligible teams
    const eligibleTeamsExcludingUser = eligibleTeams.filter(team => team.name !== userTeam);

    // Step 3: Select the final list of eligible teams (prefer excluding the user team if possible)
    const finalEligibleTeams = eligibleTeamsExcludingUser.length > 0 ? eligibleTeamsExcludingUser : eligibleTeams;

    if (finalEligibleTeams.length === 0) {
        // No eligible teams: Player remains unsold
        showPurchaseMessage(`${player.name} remains unsold.`);
    } else {
        // Step 4: Sort teams by remaining budget in descending order
        finalEligibleTeams.sort((a, b) => b.budget - a.budget);

        // Step 5: Select the team with the highest remaining budget
        const selectedTeam = finalEligibleTeams[0];

        // Step 6: Deduct the player's price from the selected team's budget
        selectedTeam.budget -= player.newPrice;

        // Step 7: Add the player to the selected team's squad
        selectedTeam.squad.push(player);

        // Show the purchase message
        showPurchaseMessage(`${selectedTeam.name} acquired ${player.name} for ₹${player.newPrice} Cr.`);
    }

    // Step 8: Move to the next player in the auction
    currentPlayerIndex++;

    // Step 9: Update teams and budgets after the pass action
    updateTeams();
    updateBudget();

    // Step 10: Show the next player for auction
    showNextPlayer();
}


// Show purchase messages
function showPurchaseMessage(message) {
    const messageContainer = document.getElementById("playerUnderAuctionMessage");
    messageContainer.innerHTML = message;
    
    messageContainer.style.display = "block";
    
    setTimeout(() => {
        messageContainer.style.display = "none";
    }, 2000);
}

function showDenyMessage(message) {
    const messageContainer = document.getElementById("playerUnderAuctionMessage");
    messageContainer.innerHTML = message;
    
    messageContainer.style.display = "block";
    
    setTimeout(() => {
        messageContainer.style.display = "none";
    }, 5000);
}

// Get the maximum number of players per team
function getMaxPlayersPerTeam(role) {
    return Math.floor(groupedPlayers[role].length / teams.length);
}


function displayRoleChangeMessage(message) {
    const roleChangeMessageElement = document.getElementById("roleChangeMessage");
    roleChangeMessageElement.innerHTML = message;
    roleChangeMessageElement.style.display = "block";

    // Hide the message after a few seconds
    setTimeout(() => {
        roleChangeMessageElement.style.display = "none";
    }, 9000);  // Hide message after 4 seconds
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('IPL Auction Squads', 10, 10);

    let yOffset = 30;

    teams.forEach(team => {
        const teamRating = calculateTeamRating(team);

        let totalHeight = 10 + (team.squad.length * 5) + (team.squad.length * 5);
        if (yOffset + totalHeight > 270) {
            doc.addPage();
            yOffset = 20;
        }

        doc.setFontSize(14);
        doc.text(`${team.name} (Rating: ${teamRating}/10 | Budget: ₹${team.budget} Cr)`, 20, yOffset);
        yOffset += 10;

        team.squad.forEach(player => {
            doc.setFontSize(12);

            let roles = [];
            if (team.captain === player.name) roles.push("Captain");
            if (team.viceCaptain === player.name) roles.push("Vice Captain");
            if (team.wicketkeeper === player.name) roles.push("Wicket Keeper");

            const roleText = roles.length > 0 ? ` [${roles.join(", ")}]` : "";
            doc.text(`${player.name} - ₹${player.newPrice.toFixed(2)} Cr${roleText}`, 20, yOffset);
            yOffset += 5;
        });

        yOffset += 8;

        if (yOffset > 270) {
            doc.addPage();
            yOffset = 20;
        }
    });

    doc.save('IPL_Auction_Squads.pdf');
}

// Button listener
document.getElementById('downloadPDF').addEventListener('click', function () {
    downloadPDF();
});




// function downloadPDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     doc.text('Shopping Cart', 10, 10);

//     let yOffset = 20;
//     cart.forEach(item => {
//       doc.text(`${item.name} - $${item.price}`, 10, yOffset);
//       yOffset += 10;
//     });

//     doc.text(`Total: $${totalPrice.toFixed(2)}`, 10, yOffset + 10);
//     doc.save('shopping-cart.pdf');
//   }



// function finalizeAuction() {
//     const minimumSpend = 105; // Minimum spend limit for each team in Cr
//     const budgetPerTeam = 110; // Maximum budget per team in Cr

//     // Check teams that haven't spent enough
//     teams.forEach(team => {
//         if (team.budget > budgetPerTeam - minimumSpend) {
//             const shortfall = budgetPerTeam - minimumSpend - team.budget;
//             const unpurchasedPlayers = players.filter(player => !player.assigned);

//             if (unpurchasedPlayers.length > 0) {
//                 // Allocate unpurchased players to this team to meet the shortfall
//                 while (team.budget > shortfall && unpurchasedPlayers.length > 0) {
//                     const player = unpurchasedPlayers.pop();
//                     player.assigned = true;
//                     team.budget -= player.newPrice;
//                     team.squad.push(player);

//                     // Adjust player price if required
//                     const priceAdjustment = Math.min(player.newPrice, shortfall);
//                     player.price = priceAdjustment;
//                     team.budget += (player.newPrice - priceAdjustment);
//                 }
//             }
//         }
//     });

//     // Verify and display final squads
//     showSquadsPage();
// }


function showSquadsPage() {
   
        // Hide auction-specific elements (upcoming players, budget, etc.)
        document.getElementById("auctionWindow").classList.add("hidden");
        document.getElementById("upcomingPlayersList").classList.add("hidden");
        document.getElementById("teamBudgets").classList.add("hidden");
    
        // Create and show the squads of all teams
        const squadContainer = document.getElementById("allTeamSquads");  // Container for displaying squads
        squadContainer.innerHTML = ""; // Clear any previous content
    
        // Display squads of all teams
        teams.forEach(team => {
            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team-squad");
    
            // Display team name
            const teamName = document.createElement("h2");
            teamName.innerText = team.name;
            teamDiv.appendChild(teamName);
    
            // Display each player's details
            const squadList = document.createElement("ul");
            if (team.squad && team.squad.length > 0) {
                team.squad.forEach(player => {
                    const li = document.createElement("li");
                    li.innerText = `${player.name} - ₹${player.price.toFixed(2)} Cr (${player.role})`;
                    squadList.appendChild(li);
                });
            } else {
                const noPlayersMessage = document.createElement("p");
                noPlayersMessage.innerText = "No players in this squad.";
                teamDiv.appendChild(noPlayersMessage);
            }
    
            teamDiv.appendChild(squadList);
            squadContainer.appendChild(teamDiv);
        });
    
        // Make the squads container visible
        squadContainer.classList.remove("hidden");
    }
    

// Function to end the auction and show squads for all teams
function endAuction() {
    console.log("Auction is ending...");

    // Hide auction page and show the final squad page
    document.getElementById("auctionPage").classList.add("hidden");
    document.getElementById("finalSquadPage").classList.remove("hidden");

    const teamSquadsContainer = document.getElementById("teamSquadsContainer");
    teamSquadsContainer.innerHTML = '';

    const gridContainer = document.createElement("div");
    gridContainer.classList.add("team-grid");

    teams.forEach(team => {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add("team-squad");
        teamDiv.id = `team-${team.name.replace(/\s+/g, '-')}`;

        // Team name and info
        const teamRating = calculateTeamRating(team);
        const teamName = document.createElement("h3");
        teamName.innerText = `${team.name}`;
        teamDiv.appendChild(teamName);

        const teamInfo = document.createElement("p");
        teamInfo.innerText = `Rating: ${teamRating}/10 | Budget: ₹${team.budget} Cr`;
        teamDiv.appendChild(teamInfo);

        // Player table
        const playerTable = document.createElement("table");
        playerTable.classList.add("player-table");

        const tableHeader = document.createElement("tr");
        tableHeader.innerHTML = `
            <th>Name</th>
            <th>Price (Cr)</th>
            <th>Role</th>
            <th>Special Role</th>
        `;
        playerTable.appendChild(tableHeader);

        team.squad.forEach(player => {
            const playerRow = document.createElement("tr");

            const playerNameCell = document.createElement("td");
            playerNameCell.innerText = player.name;

            const playerPriceCell = document.createElement("td");
            playerPriceCell.innerText = `₹${player.newPrice}`;

            const playerRoleCell = document.createElement("td");
            playerRoleCell.innerText = player.role;

            const specialRoleCell = document.createElement("td");
            let specialRoles = [];
            if (team.captain === player.name) specialRoles.push("Captain");
            if (team.viceCaptain === player.name) specialRoles.push("Vice Captain");
            if (team.wicketkeeper === player.name) specialRoles.push("Wicket Keeper");
            specialRoleCell.innerText = specialRoles.join(", ");

            playerRow.appendChild(playerNameCell);
            playerRow.appendChild(playerPriceCell);
            playerRow.appendChild(playerRoleCell);
            playerRow.appendChild(specialRoleCell);

            playerTable.appendChild(playerRow);
        });

        teamDiv.appendChild(playerTable);

        // Role selection area
        const roleSelectionDiv = document.createElement("div");
        roleSelectionDiv.classList.add("role-selection");

        // Captain dropdown
        const captainLabel = document.createElement("label");
        captainLabel.innerText = "Select Captain: ";
        const captainSelect = document.createElement("select");
        captainSelect.id = `captainSelect-${team.name.replace(/\s+/g, '-')}`;
        team.squad.forEach(player => {
            const option = document.createElement("option");
            option.value = player.name;
            option.text = player.name;
            captainSelect.appendChild(option);
        });
        roleSelectionDiv.appendChild(captainLabel);
        roleSelectionDiv.appendChild(captainSelect);

        // Vice-Captain dropdown
        const vcLabel = document.createElement("label");
        vcLabel.innerText = "Select Vice-Captain: ";
        const vcSelect = document.createElement("select");
        vcSelect.id = `vcSelect-${team.name.replace(/\s+/g, '-')}`;
        team.squad.forEach(player => {
            const option = document.createElement("option");
            option.value = player.name;
            option.text = player.name;
            vcSelect.appendChild(option);
        });
        roleSelectionDiv.appendChild(vcLabel);
        roleSelectionDiv.appendChild(vcSelect);

        // Wicketkeeper dropdown
        const wkLabel = document.createElement("label");
        wkLabel.innerText = "Select Wicketkeeper: ";
        const wkSelect = document.createElement("select");
        wkSelect.id = `wkSelect-${team.name.replace(/\s+/g, '-')}`;
        team.squad.forEach(player => {
            const option = document.createElement("option");
            option.value = player.name;
            option.text = player.name;
            wkSelect.appendChild(option);
        });
        roleSelectionDiv.appendChild(wkLabel);
        roleSelectionDiv.appendChild(wkSelect);

        // Confirm button
        const confirmButton = document.createElement("button");
        confirmButton.innerText = "Confirm Roles";
        confirmButton.addEventListener("click", () => {
            const captain = captainSelect.value;
            const vc = vcSelect.value;
            const wk = wkSelect.value;

            if (!captain || !vc || !wk) {
                alert("Please select Captain, Vice-Captain, and Wicketkeeper.");
                return;
            }

            if (captain === vc) {
                alert("Captain and Vice-Captain cannot be the same player.");
                return;
            }

            // Save roles
            team.captain = captain;
            team.viceCaptain = vc;
            team.wicketkeeper = wk;

            // Display updated squad
            displayFinalSquadWithRoles(team);

            // Visual confirmation
            confirmButton.textContent = "✓ Roles Confirmed";
            confirmButton.style.backgroundColor = "#4CAF50";
            setTimeout(() => {
                confirmButton.textContent = "Confirm Roles";
                confirmButton.style.backgroundColor = "var(--primary-color)";
            }, 2000);
        });

        roleSelectionDiv.appendChild(confirmButton);
        teamDiv.appendChild(roleSelectionDiv);

        gridContainer.appendChild(teamDiv);
    });

    // Append all team divs to the container
    teamSquadsContainer.appendChild(gridContainer);


   
    // Show the "Download Squad PDF" button after the auction
    const downloadPDFButton = document.getElementById("downloadPDF");
    downloadPDFButton.style.display = "block"; // Make the button visible
}
function displayFinalSquadWithRoles(team) {
    const teamDiv = document.getElementById(`team-${team.name.replace(/\s+/g, '-')}`);
    if (!teamDiv) {
        console.error(`Team div not found for team: ${team.name}`);
        return;
    }

    // Find the role selection section
    const roleSelectionDiv = teamDiv.querySelector(".role-selection");

    // Hide the role selection section by adding a CSS class
    if (roleSelectionDiv) {
        roleSelectionDiv.classList.add("hidden");
    }

    // Find the player table
    const playerTable = teamDiv.querySelector(".player-table");

    // Clear existing rows (except the header)
    while (playerTable.rows.length > 1) {
        playerTable.deleteRow(1);
    }

    // Add updated player rows
    team.squad.forEach(player => {
        const playerRow = document.createElement("tr");

        // Player name
        const playerNameCell = document.createElement("td");
        playerNameCell.innerText = player.name;

        // Player price
        const playerPriceCell = document.createElement("td");
        playerPriceCell.innerText = `₹${player.newPrice}`;

        // Player role
        const playerRoleCell = document.createElement("td");
        playerRoleCell.innerText = player.role;

        // Special roles (Captain, VC, WK)
        const specialRoleCell = document.createElement("td");
        let specialRoles = [];
        if (team.captain === player.name) {
            specialRoles.push("Captain");
        }
        if (team.viceCaptain === player.name) {
            specialRoles.push("Vice Captain");
        }
        if (team.wicketkeeper === player.name) {
            specialRoles.push("Wicket Keeper");
        }
        specialRoleCell.innerText = specialRoles.join(", ");

        // Append cells to the row
        playerRow.appendChild(playerNameCell);
        playerRow.appendChild(playerPriceCell);
        playerRow.appendChild(playerRoleCell);
        playerRow.appendChild(specialRoleCell);

        // Append row to the table
        playerTable.appendChild(playerRow);
    });
}
// Check if the current page is the first page
if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
    // Remove the footer if it's not the first page
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.display = 'none';
    }
}
// Function to restart the auction and redirect to the welcome page
function restartAuction() {
    // You can also clear localStorage if necessary before redirecting
    localStorage.clear(); // Clears all stored data (optional)

    // Redirect to the welcome page
    window.location.href = 'index.html'; 
}
function toggleMenu() {
    const restartAuctionContainer = document.getElementById('restartAuctionContainer');
    
    // Toggle the display property of the container
    if (restartAuctionContainer.style.display === "none" || restartAuctionContainer.style.display === "") {
      restartAuctionContainer.style.display = "block"; // Show the button
    } else {
      restartAuctionContainer.style.display = "none"; // Hide the button
    }
  }
  function calculatePlayerRating(player) {
    const skillLevel = player.skillLevel;
    const performanceScore = player.performanceScore;
    
    // Cap the experience to a maximum of 10
    const consistency = Math.min(player.consistency, 10);

    // const playerRating = (skillLevel*0.50) + (0.30*performanceScore) + (consistency*0.2);
    const playerRating=Math.cbrt(skillLevel * performanceScore * consistency);
    return playerRating.toFixed(1);
}

function calculateTeamRating(team) {
    let totalRating = 0;

    // Loop through the team players and calculate their ratings
    team.squad.forEach(player => {
        const playerRating = calculatePlayerRating(player);
        totalRating += parseFloat(playerRating); 
    });

    // Team Rating is the average of all player ratings
    const teamRating = totalRating / team.squad.length;
    return teamRating.toFixed(1); // Returning the rating rounded to 1 decimal place
}
