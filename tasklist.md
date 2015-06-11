save
    serialize tx_graph
    local storage...
load
    save graphs into json somehow
    show tab
    show options
    select option
        clear graph
        load graph to api layer
        autoexpand graph from api
layout
    partitions
    multiple input transactions
    [x] unspent transactions
    calculate edges    
display
    [x] force show sidebar on select
    [x] hide sidebar on deselect
    autoexpand button
    show inputs/outputs
    render edges
    centering zoom
    reseting zoom
    scaling ring radiuses
    autoscale on expand
    menu icon
    text select cursor bug?
controller
    queue for actions/autoexpand
    allow for interupts

[x] new
    clear tx_graph
    show search bar
        input box
            logo
            description
        toggling ui elemnts
            use controlller
        submit input
        create new tx_graph if success
        hide search bar
        render graph

[x] updating model
    date
    block
    confirmations
load tab
[x] deselect shard
[-] sidebar transitions
    [x] make transitions work
    [x] menu button
    link sidebar to select and deselect
screen quirks
    centering zoom


ui
    overview
        blank map is search box
        sidebar holds tabbed info
            save/load maps
            transaction details/outputs/details/addresses/etc
        what about...
            expanding inputs?
        autoexpand button
    figure out what to have in ui
        transaction search box
        new transaction map
        load transaction map
        starting screen
        sidebar
        (views?)
lx] better control flow
scaling ring radiuses
mass loading for fast autoexpand



control flow
    clean out display.js
    move actions somewhere else

automatic scaling

drawing links
dealing with unspent transactions

actual shard collision handling

state saving, serialize into json
saving/loading states/maps




[-] serverside request local saving
[x] automated expansion
    expand until set height is reached
[-] hoverbox
[x] animation tween
    [x] new layout and prev_layout
    [x] slide in new shards
fancy css ui tweeks
    [x] server to serve static files
    [x] choose style to implement
    [x] color it
    [x] make rings thinner?
    [x] make ring margins thinner?
    [x] make shard spacing thinner?
    [x] logo?
    [x] tips
[x] minify javascript




[x] clean up layout.js
    this is all about iterating txs
        there a number of thing we need to compute...
            number of rings in visual
                ie number of distinct heights
            largest value of any one ring
            node values
                visual height
                height drawn in visual, not block height
                    ...

[-] shard positioning based on partitioning
    figure out math behind obligations
        center children around current position
        compute position using weighted average of all obligations
        compute parition position as weighted average of all shards
    for each node create "obligation" in output nodes
    for each node compute position based on obligations
        create partition based on position
        if partition collides merge partitions

drawing links
    calculating link "height"/priority
    2 arcs and a line... ew

[x] color code based on expansion completeness

infobox
    hoverover
    item select (optional)
    highlight if not spent

saving and loading graphs (serialize)
    preset maps
    local save (optional)

adding transactions
clear graph

loading screen / splash (optional)

[-] prevent double loading

[x] drag panning
[x] zoom in/out

starting screen
    load or new (new origin)
    state management
