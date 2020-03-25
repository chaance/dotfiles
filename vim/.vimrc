set nocompatible
filetype on
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'tpope/vim-commentary'
Plugin 'tpope/vim-sensible'
Plugin 'tpope/vim-surround'
Plugin 'tprpe/vim-vinegar'
Plugin 'editorconfig/editorconfig-vim'
Plugin 'jiangmiao/auto-pairs'
Plugin 'leafgarland/typescript-vim'

call vundle#end()

highlight LineNr ctermfg=grey
syntax on
set autoindent
set autoread
set backspace=2
set encoding=utf-8
set ignorecase
set mouse=a
set number           "show line numbers
set smartcase
set tabstop=4

augroup conf_ft
  au!
  autocmd BufNewFile,BufRead *.conf set syntax=apache
augroup END
