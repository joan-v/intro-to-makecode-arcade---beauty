controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite_.startEffect(effects.smiles, randint(100, 5000))
})
let sprite_: Sprite = null
game.splash("hi this is BEAUTY this is my first coding ")
scene.setBackgroundColor(9)
sprite_ = sprites.create(img`
    ............................................................cc.....
    ...........................................................ccc.....
    ...........................................................cdc.....
    ..........................................................ccdc.....
    ..........................................................cddcc....
    .........................................................ccddbcc...
    .........................................................cdddbcc...
    ........................................................ccdddbdc...
    .......................................................ccdddbddc...
    ......................................................ccdddbbddbcc.
    ....................................................ccbbddbbdddbdc.
    ..................................................cccddbddddddbddc.
    .................................................ccddddbdddddbdddcc
    ................................................cdddddbbddddddddbcc
    ccc............................................cdddddbbddddddddbddc
    cdcc..........................................cddddddbbddddddbbddcc
    cddcc........................................cddddddddbbdddddddddc.
    .cddcc.......................................cdddddddddbddddddddc..
    .cdddcc......................................cdddddddddbdddddbbbccc
    ccbdddc......................................cbdddddddbbddddddddddc
    cdbbddcc.................ccccccc.............cbdddddbbbddddddddddcc
    cddbbddc...............ccbbbbbbbcc............cdddddbbddddddddddcc.
    ccdddddcc.............ccbbbbbbbbbcc...........cdddddbbddddddbbbbc..
    .cddddddcc............cbbbbbbbbbbbc...........cddddddbdddddddbbbc..
    .ccddddddcc...........cbbbbbbffbbbcc.........cbddddddbddddddddddc..
    ..cddddddbccccccc....c111bbbbffbbbbcc......cccddddddbbddddbbdddcc..
    ...cddddbbdddddddcc..f111bbbbbbbbbbbccc..ccddddddbbbbdddddddbbbc...
    ..cbbbddbbddddddddcccfbb11cbbbbbbbbbbbcccddddddddbbdddddbdddddc....
    .cdddbbdbbbbdddddddddfbbbbcbbbbbbbbbbb6cdddddddddbdddddddbdddc.....
    .ccdddddddbbbddddddddfbbfccbbbbbbbbbbb6cdddbbbbdbbddddddddbbbc.....
    ..ccddddddddbddddddddfbfdcbbbbbbbbbbb66bddbbbdbbbbddbddbdddbc......
    ....cddddddbbddddddddffddcbbbbbbbbbbb663bbbdddddddddbddbbdddc......
    ....cbbddddbbdbbbddddddddcbbbbbbbbbbb663bbbddbdddddddbddbbbcc......
    ....cddbbdddbbbbbddddddddcbbbbbbbbb66633ddbddbdddbbdddbddccc.......
    ....ccddddddddddbdddddddccbbbbbbbbb6633dddbddbbdddbbddcccc.........
    .....ccdddddddddbbddbbddcbbbbbbbbbb663dddddddcbbdddbbc.............
    ......ccddddddddbbbbbbddc6bbbbbbbb666ddddddcccccccccc..............
    .......ccbbbbdddddddbbbbc666bb6666663ddddddc.......................
    .........cbbddddddddddbbc66666666663dddddddc.......................
    .........cdddddbddddddbccd3666633ddddddddddc.......................
    .........ccddbbbddbdddbccdd33333dddddddddddc.......................
    ..........cccccddbbddbb.ccddddddddddddddddddc......................
    ..............ccccccbb...ccdddddddddddddddddc......................
    ...................cc.....ccddddddddddddddddcc.....................
    ...........................ccddddddddddbbbbddcc....................
    ............................bbbdddddddbbbbbddccccccc...............
    .............................bbbddddddbdddddddddddbcc..............
    .............................ccccddddbccccddddddddbbc..............
    ............................c3333cdddc3333cddddddcccc..............
    ...........................cc33333cbcc33333cdddddcc................
    ...........................c3333333cc3333333cdcdbbc................
    ...................bbbbbbbbc3c3c3c3cc3c3c3c3cdccbbc................
    ...................b1d11111c3c3c3cb1c3c3c3cbbdbccc.................
    ...................b1dd11111bcbccc111bcbcccdbbbcc..................
    ...................b11d111111111111111dd111dbccc...................
    ..................b111dd1111111111111dd1111dbc.....................
    ..................b1111dd11111111111dd1111ddb......................
    ..................b11111dd111111111dd11111ddb......................
    .................b1111111d11111111dd111111ddb......................
    .................b1111111dd111111dd1111111db.......................
    .................b11111111dd111ddd11111111db.......................
    .................b111111111dd1dd1111111111db.......................
    ................b11111111111ddd1111111111ddb.......................
    ................b111111111111111111111111ddb.......................
    ................b111111111111111111111111ddb.......................
    ................b111111111111111111111111ddb.......................
    ................bbbb111111111111111111111db........................
    ...................bbbbbbb111111111111111db........................
    ..........................bbbbbbbb1111111db........................
    .................................bbbbbbbbbb........................
    `, SpriteKind.Player)
