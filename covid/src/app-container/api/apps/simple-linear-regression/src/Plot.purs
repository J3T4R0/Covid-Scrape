module Plot where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Aff (Aff)

foreign import data PLOT :: Effect

foreign import makePlot :: forall aff. PlotData -> Aff (plot :: PLOT | aff) Unit

type PlotData = { scatter :: Array { x :: Number, y :: Number }, line :: Array { x :: Number, y :: Number } }

emptyPlotData :: PlotData
emptyPlotData = { scatter: [], line: [] }