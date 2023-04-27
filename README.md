# Atroo Code Challenge

## Project Launch
- npm install
- yarn nx run challenge-app:serve
- npx nx run components:storybook
  ( see README.md file )

## Alternative ways to complete the task, then there are several ways to complete the task.
1)We can display the pdf using pagination
2)We can display the pdf using a list
3)We can display large lists of pdfs using a virtualized list


##  Approach to libraries
There are many ways to approach this task, from choosing readymade libraries based on mozilla pdf viewer to
implementing own pdf viewer based on mozilla pdf, but I chose react-pdf because it's the most optimized,
popular and has a good API, so it works well for this tech task.


## Assumptions during the development

1)As part of the development it was necessary to supplement the webpack configurations nx projects to be able to import and work with pdf

2)In case we want to implement a virtualization list to display documents additional optimizations are needed for zoom and resize,
since we need to recalculate the height of documents when the width of the container changes to render them correctly.

### Optimization methods when using the virtual list:

1 way
The essence of the optimization is to display a pdf as an image instead of a canvas which allows us to avoid
UI glare which impairs the user experience.

2 way
The essence of optimization is to manually perform all the heavy recalculations of the document
height, we can use svg renderMode for the pdfDocument in this case.
