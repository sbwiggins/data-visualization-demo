import * as go from 'gojs';
import configureForceDirectedLayout from './configureForceDirectedLayout'
import ZoomSlider from './ZoomSlider'

const $ = go.GraphObject.make;

function createCommonModelDiagram() {

    const commonModelDiagram =
        $(go.Diagram, 'common-model-diagram',  // must name or refer to the DIV HTML element
            {
                initialAutoScale: go.Diagram.Uniform,  // an initial automatic zoom-to-fit
                contentAlignment: go.Spot.Center,  // align document to the center of the viewport
                layout:
                    $(configureForceDirectedLayout(),  // automatically spread nodes apart while dragging
                        { defaultSpringLength: 30, defaultElectricalCharge: 100 }),
                // do an extra layout at the end of a move
                "SelectionMoved": function (e) { e.diagram.layout.invalidateLayout(); }
            }
        );

    // dragging a node invalidates the Diagram.layout, causing a layout during the drag
    commonModelDiagram.toolManager.draggingTool.doMouseMove = function () {
        go.DraggingTool.prototype.doMouseMove.call(this);
        if (this.isActive) { this.diagram.layout.invalidateLayout(); }
    }

    // define each Node's appearance
    commonModelDiagram.nodeTemplate =
        $(go.Node, "Auto",
            //  { contextMenu: nodeContextMenu },
            $(go.Shape, "Circle",
                { fill: "CornflowerBlue", stroke: "black", spot1: new go.Spot(0, 0, 5, 5), spot2: new go.Spot(1, 1, -5, -5) }),
            $(go.TextBlock,
                { font: "bold 10pt helvetica, bold arial, sans-serif", textAlign: "center", maxSize: new go.Size(100, NaN) },
                new go.Binding("text", "text")),
            $("TreeExpanderButton",
                { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top },
                { visible: true })

        );
    // define the link appearance
    commonModelDiagram.linkTemplate =
        $(go.Link,
            $(go.Shape),
            $(go.Shape, { toArrow: "Standard" }),
            $(go.TextBlock,
                { segmentOffset: new go.Point(0, -5) },
                new go.Binding("text", "text"))
        );
    /*
        commonModelDiagram.maxSelectionCount = 1
    
        commonModelDiagram.contextMenu = nodeContextMenu         
        
        commonModelDiagram.addDiagramListener("ObjectSingleClicked",
            function (e) {
                var part = e.subject.part               
                if (part instanceof go.Link) {
                    
                    if (part.data.text == "+") {
                        //$('#related-views-container').dialog("open");                        
                        selectedGridData = relatedViewQuery.filter("relatedArchId", "=", nodeDataArrayQuery.filter("key", "=", part.data.to).toArray()[0].architectureId).toArray()
                        selectedArchName = selectedGridData[0].architectureName
                        selectedArchId = selectedGridData[0].architectureId
                        selectedRelatedArchName = selectedGridData[0].relatedArchName
                        selectedRelatedArchId = selectedGridData[0].relatedArchId
                       // createRelatedViewGrid("#related-views-grid")    
                    }
                }                
    
            })
    */
    // After the nodes and links have been created,
    // expand each of the tree roots to 3 levels deep.
    commonModelDiagram.addDiagramListener("InitialLayoutCompleted", function (e) {
        // collape all nodes except the root
        if (e.diagram.model.nodeDataArray.length > 0) {
            e.diagram.model.nodeDataArray.forEach(function (node) {
                if (node.parentArchKey) {
                    e.diagram.findNodeForKey(node.key).isTreeExpanded = false
                }

            })
        }
        e.diagram.zoomToFit()
        //$("#common-model-container").css({ width: "850px" }) //force resize after gojs initializes

    });

    new ZoomSlider(commonModelDiagram);

    return commonModelDiagram
}

export default createCommonModelDiagram
