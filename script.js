// --------------------------------------
// By: Enrique Lopez, Paris Kalathas
// --------------------------------------

const cy = cytoscape({

    container: document.getElementById("cy"),

    // ----------------------------------
    // Graph data
    // ----------------------------------

    elements: [

        // ==============================
        // NODES
        // ==============================

        {
            data: {
                id: "computer-science",
                level: 0,
                label: "Computer Science",
                description:
                    "The study of computation, information, algorithms, and computational systems."
            }
        },

        {
            data: {
                id: "programming",
                level: 1,
                label: "Programming",
                description:
                    "The process of designing and writing instructions that computers can execute."
            }
        },

                {
                    data: {
                        id: "variables",
                        level: 2,
                        label: "Variables",
                        description:
                            "Named locations used to store and manipulate data in a program."
                    }
                },

                {
                    data: {
                        id: "functions",
                        level: 2,
                        label: "Functions",
                        description:
                            "Reusable blocks of code that perform a particular task."
                    }
                },

                {
                    data: {
                        id: "loops",
                        level: 2,
                        label: "Loops",
                        description:
                            "Control structures that allow code to be executed repeatedly."
                    }
                },

                {
                    data: {
                        id: "conditionals",
                        level: 2,
                        label: "Conditionals",
                        description:
                            "Control structures that allow code to be executed based on certain conditions."
                    }
                },

                {
                    data: {
                        id: "code",
                        level: 2,
                        label: "Code",
                        description:
                            "Instructions written in a programming language that can be executed by a computer."
                    }
                },

                {
                    data: {
                        id: "programming_paradigms",
                        level: 2,
                        label: "Programming Paradigms",
                        description:
                            "Different approaches to structuring and organizing code in programming."
                    }
                },

        {
            data: {
                id: "algorithms",
                level: 1,
                label: "Algorithms",
                description:
                    "Step-by-step procedures for solving computational problems."
            }
        },

                {
                    data: {
                        id: "sorting",
                        level: 2,
                        label: "Sorting Algorithms",
                        description:
                            "Algorithms for arranging data in a particular order."
                    }
                },

                {
                    data: {
                        id: "searching",
                        level: 2,
                        label: "Searching Algorithms",
                        description:
                            "Algorithms for finding specific items in a collection of data."
                    }
                },

                {
                    data: {
                        id: "graph",
                        level: 2,
                        label: "Graph Algorithms",
                        description:
                            "Algorithms for dealing with network/graph structures and the relationships between nodes."
                    }
                },

                {
                    data: {
                        id: "string",
                        level: 2,
                        label: "String Algorithms",
                        description:
                            "Algorithms for manipulating and processing strings of characters."
                    }
                },

                {
                    data: {
                        id: "optimization",
                        level: 2,
                        label: "Optimization Algorithms",
                        description:
                            "Algorithms for finding the best solution among a set of possible solutions."
                    }
                },



        {
            data: {
                id: "data-structures",
                level: 1,
                label: "Data Structures",
                description:
                    "Ways of organizing and storing data so that it can be used efficiently."
            }
        },

                {
                    data: {
                        id: "arrays",
                        level: 2,
                        label: "Arrays",
                        description:
                            "A collection of elements identified by index or key."
                    }
                },

                {
                    data: {
                        id: "queues",
                        level: 2,
                        label: "Queues",
                        description:
                            "A collection of elements that follows the First-In-First-Out (FIFO) principle."
                    }
                },

                {
                    data: {
                        id: "stacks",
                        level: 2,
                        label: "Stacks",
                        description:
                            "A collection of elements that follows the Last-In-First-Out (LIFO) principle."
                    }
                },

                {
                    data: {
                        id: "linkedlist",
                        level: 2,
                        label: "Linked Lists",
                        description:
                            "A collection of elements where each element points to the next element in the sequence."
                    }
                },

                {
                    data: {
                        id: "trees",
                        level: 2,
                        label: "Trees",
                        description:
                            "A hierarchical data structure consisting of nodes connected by edges."
                    }
                },

                {
                    data: {
                        id: "graphs",
                        level: 2,
                        label: "Graphs",
                        description:
                            "A collection of nodes connected by edges."
                    }
                },

        {
            data: {
                id: "artificial-intelligence",
                level: 1,
                label: "Artificial Intelligence",
                description:
                    "The study and development of systems capable of performing tasks associated with intelligent behavior."
            }
        },

                {
                data: {
                    id: "machine-learning",
                    level: 2,
                    label: "Machine Learning",
                    description:
                        "Fill"
                    }
                },

                {
                data: {
                    id: "robotics",
                    level: 2,
                    label: "Robotics",
                    description:
                        "Fill"
                    }
                },

                {
                data: {
                    id: "computer-vision",
                    level: 2,
                    label: "Computer Vision",
                    description:
                        "Fill"
                    }
                },

                {
                data: {
                    id: "natural-language-processing",
                    level: 2,
                    label: "Natural Language Processing",
                    description:
                        "Fill"
                    }
                },

                {
                data: {
                    id: "generative-ai",
                    level: 2,
                    label: "Generative AI",
                    description:
                        "Fill"
                    }
                },

        /*
        {
            data: {
                id: "cat",
                label: "Cat",
                description:
                    "A small domesticated carnivorous mammal.",
                image: "imgs/cat.jpg",
                video: "https://www.youtube.com/embed/kQRuFQ9Qqps?si=fRM9dVrjyUQQxp9"
            }
        },
        */

        // ==============================
        // EDGES
        // ==============================

        {
            data: {
                id: "cs-programming",
                source: "computer-science",
                target: "programming",
                relationship: "related to"
            }
        },

        {
            data: {
                id: "cs-programming-paradigms",
                source: "programming",
                target: "programming_paradigms",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "programming-variables",
                source: "programming",
                target: "variables",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "programming-functions",
                source: "programming",
                target: "functions",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "programming-loops",
                source: "programming",
                target: "loops",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "programming-conditionals",
                source: "programming",
                target: "conditionals",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "programming-code",
                source: "programming",
                target: "code",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "cs-algorithms",
                source: "computer-science",
                target: "algorithms",
                relationship: "related to"
            }
        },

        {
            data: {
                id: "algorithm-sorting",
                source: "algorithms",
                target: "sorting",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "algorithm-graph",
                source: "algorithms",
                target: "graph",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "algorithm-optimization",
                source: "algorithms",
                target: "optimization",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "algorithm-searching",
                source: "algorithms",
                target: "searching",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "algorithm-string",
                source: "algorithms",
                target: "string",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "cs-data-structures",
                source: "computer-science",
                target: "data-structures",
                relationship: "related to"
            }
        },

        {
            data: {
                id: "data-structures-arrays",
                source: "data-structures",
                target: "arrays",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "data-structures-stacks",
                source: "data-structures",
                target: "stacks",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "data-structures-queues",
                source: "data-structures",
                target: "queues",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "data-structures-trees",
                source: "data-structures",
                target: "trees",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "data-structures-linkedlist",
                source: "data-structures",
                target: "linkedlist",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "data-structures-graphs",
                source: "data-structures",
                target: "graphs",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "cs-ai",
                source: "computer-science",
                target: "artificial-intelligence",
                relationship: "related to"
            }
        },

        {
            data: {
                id: "ai-machine-learning",
                source: "artificial-intelligence",
                target: "machine-learning",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "ai-natural-language-processing",
                source: "artificial-intelligence",
                target: "natural-language-processing",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "ai-computer-vision",
                source: "artificial-intelligence",
                target: "computer-vision",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "ai-robotics",
                source: "artificial-intelligence",
                target: "robotics",
                relationship: "contains"
            }
        },

        {
            data: {
                id: "ai-generative-ai",
                source: "artificial-intelligence",
                target: "generative-ai",
                relationship: "contains"
            }
        },
        /*
        {
            data: {
                id: "cs-cat",
                source: "computer-science",
                target: "cat",
                relationship: "NOT related to"
            }
        },
        */

        // --------------------------------

        {
            data: {
                id: "programming-data-structures",
                source: "programming",
                target: "data-structures"
            }
        },

        {
            data: {
                id: "data-structures-algorithms",
                source: "data-structures",
                target: "algorithms"
            }
        },

        {
            data: {
                id: "algorithms-ai",
                source: "algorithms",
                target: "artificial-intelligence"
            }
        },


    ],

    // ----------------------------------
    // Styling
    // ----------------------------------

    style: [

        {
            selector: "node",

            style: {
                "label": "data(label)",
                "color": "#222",
                "text-valign": "center",
                "text-halign": "center",
                "font-size": "12px",
                "width": "83px",
                "height": "83px",
                "text-wrap": "wrap",
                "text-max-width": "80px"
            }
        },

        // Root 
        {
            selector: "#computer-science",

            style: {
                "color": "#222",
                "font-size": "18px",
                "width": "120px",
                "height": "120px"
            }
        },

        // Edges
        {
            selector: "edge",

            style: {
                "width": 2,
                "line-color": "#aaa",
                "target-arrow-color": "#aaa",
                "target-arrow-shape": "triangle",
                "curve-style": "bezier"
            }
        },

        // Highlight selected node
        {
            selector: "node:selected",

            style: {
                "border-width": 4,
                "border-color": "#222"
            }
        },

        {
            selector: 'node[level = 0]',

            style: {
                "background-color": "#789F90"
            }
        },

        {
            selector: 'node[level = 1]',

            style: {
                "background-color": "#F2C75C"
            }
        },

        {
            selector: 'node[level = 2]',

            style: {
                "background-color": "#5CB8B2"
            }
        },

        {
            selector: 'node[level = 3]',

            style: {
                "background-color": "#D5E4F4"
            }
        }

    ],

    // ----------------------------------
    // Initial layout
    // ----------------------------------

    layout: {
        name: "cose",
        directed: true,
        roots: ["computer-science"],
        spacingFactor: 1.5,
        padding: 50
    }
});


// --------------------------------------
// Node click behavior
// --------------------------------------

function showNodeInfo(node) {

    // ----------------------------------
    // Get basic node information
    // ----------------------------------

    const title = node.data("label");
    const description = node.data("description");

    const mediaPanel =
        document.getElementById("info-media");

    // Clear previous media
    mediaPanel.innerHTML = "";


    document.getElementById("info-title").textContent =
        title;

    document.getElementById("info-description").textContent =
        description;


    // ----------------------------------
    // Display image if available
    // ----------------------------------

    if (node.data("image")) {

        const image = document.createElement("img");

        image.src = node.data("image");

        image.alt = title;

        image.classList.add("info-image");

        mediaPanel.appendChild(image);
    }


    // ----------------------------------
    // Display video if available
    // ----------------------------------

    if (node.data("video")) {

        const video = document.createElement("iframe");

        video.src = node.data("video");

        video.width = "100%";
        video.height = "200";

        video.frameBorder = "0";

        video.allowFullscreen = true;

        video.classList.add("info-video");

        mediaPanel.appendChild(video);
    }


    // ----------------------------------
    // Find edges connected to this node
    // ----------------------------------

    const connectedEdges = node.connectedEdges();


    // ----------------------------------
    // Get connections panel
    // ----------------------------------

    const connectionPanel =
        document.getElementById("info-connections");

    connectionPanel.innerHTML = "";


    // ----------------------------------
    // If there are no connections
    // ----------------------------------

    if (connectedEdges.length === 0) {

        connectionPanel.innerHTML =
            "<p><i>No connected topics.</i></p>";

        return;
    }


    // ----------------------------------
    // Add heading
    // ----------------------------------

    const heading = document.createElement("h3");

    heading.textContent = "Connections";

    connectionPanel.appendChild(heading);


    // ----------------------------------
    // Process each edge
    // ----------------------------------

    connectedEdges.forEach(function(edge) {

        // Get source and target

        const source = edge.source();
        const target = edge.target();


        // ----------------------------------
        // Determine the OTHER node
        // ----------------------------------

        let connectedNode;

        if (source.id() === node.id()) {

            connectedNode = target;

        } else {

            connectedNode = source;

        }


        // ----------------------------------
        // Get relationship
        // ----------------------------------

        const relationship =
            edge.data("relationship");


        // ----------------------------------
        // Create connection element
        // ----------------------------------

        const connection =
            document.createElement("div");

        connection.classList.add("connection");


        // ----------------------------------
        // Display connection
        // ----------------------------------

        if (relationship) {

            connection.textContent =
                "→ " +
                connectedNode.data("label") +
                " (" +
                relationship +
                ")";

        } else {

            connection.textContent =
                "→ " +
                connectedNode.data("label");

        }


        // ----------------------------------
        // Make connection clickable
        // ----------------------------------

        connection.addEventListener("click", function() {

            // Unselect everything
            cy.nodes().unselect();


            // Select connected node
            connectedNode.select();


            // Center graph on connected node

            cy.animate({

                center: {
                    eles: connectedNode
                },

                duration: 500

            });


            // Update information panel
            showNodeInfo(connectedNode);

        });


        // Add to panel
        connectionPanel.appendChild(connection);

    });
}


// --------------------------------------
// Clicking a node
// --------------------------------------

cy.on("tap", "node", function(event) {
    const node = event.target;
    showNodeInfo(node);

});


// --------------------------------------
// Clicking empty space
// --------------------------------------

cy.on("tap", function(event) {

    if (event.target === cy) {
        document.getElementById("info-title").textContent = "Select a topic";
        document.getElementById("info-description").textContent = "Click a node to learn more about it.";
        document.getElementById("info-media").innerHTML = "";
        document.getElementById("info-connections").innerHTML = "";
    }
});