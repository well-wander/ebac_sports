import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    // se já está nos favoritos, remove; senão, adiciona
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const jaFavoritado = state.itens.some((item) => item.id === produto.id)

      if (jaFavoritado) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions

export default favoritosSlice.reducer
