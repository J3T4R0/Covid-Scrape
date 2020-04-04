{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "simple-linear-regression"
, dependencies = [ "console", "effect", "psci-support", "prelude", "console", "math",
    "integers",
    "globals",
    "halogen",
    "halogen-css",
    "maybe",
    "enums",
    "transformers",
    "tuples",
    "dom-indexed",
    "integers",
    "arrays",
    "partial",
    "either",
    "test-unit",
    "foldable-traversable",
    "lists",
    "record"
 ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}


   