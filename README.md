# eleventy-site-generator
<br>

## overview
* Static site generator (11ty: template language JavaScript) that switches display screens and attachments according to settings
<br><br>


## usage
* Set the display screen and attached contents under data and build

 1. Store one of top.csv, sub1.csv, sub2.csv, sub3.csv, sub4.csv under /data/attachment

     Only stored items are attached

2. Run either build.bat or sh

    →The built screen is displayed when index.html created under dist is started
    
<br>

```
Reference) Processing configuration of eleventy-site-generator

root
└data
｜└attachment：Attachment storage directory
｜└paramater.js：Display screen setting file
└src
｜└assets：
｜└template
｜｜└xx.js: general-purpose template file
｜└xx.11ty.js: js file that configures the top and sub screens (sub is created with a general-purpose template)
└eleventy.config.js: 11ty configuration files
└package.json: 11ty version information, etc.
└copyTemplates.js: Compare the data directory and the src directory and place the directories and files required for the build in the ./build directory
└build.sh or bat: call copyTemplates.js and then execute build

```
tt
