class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render :json => @posts
  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => 418
    end
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => 418
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :ok
  end

end
